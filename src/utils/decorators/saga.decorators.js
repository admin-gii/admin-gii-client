import { miniSerializeError } from '@reduxjs/toolkit';
import * as effects from 'redux-saga/effects';

export function SagaCreator() {
  return function (constructor) {
    const watchers = (constructor.prototype._watchers || []).map(watcher => {
      return effects.fork(constructor.prototype[watcher]);
    });

    return class {
      constructor() {
        return (function* () {
          yield effects.all(watchers);
        })();
      }
    };
  };
}

export function TryCatch(defaultAction, { disableLoading, disableError }) {
  return function (target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function* (action, ...props) {
      try {
        if (!disableLoading) {
          yield effects.put(defaultAction.setLoading(true));
        }
        yield effects.call(originalMethod, action, ...props);
      } catch (error) {
        if (!disableError) {
          yield effects.put(defaultAction.setError(miniSerializeError(error)));
        }
      } finally {
        if (!disableLoading) {
          yield effects.put(defaultAction.setLoading(false));
        }
      }
    };

    return descriptor;
  };
}

export function Saga(pattern) {
  return function (target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    target._watchers = target._watchers || [];
    target._watchers.push(propertyKey);

    descriptor.value = function* () {
      yield effects.takeLatest(pattern, originalMethod);
    };

    return descriptor;
  };
}
