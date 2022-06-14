import { CaseReducerActions } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { Fn } from '@types';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ValueOf } from './selector-hook-factory';
import {
  ActionWithPayload,
  DefaultActions,
  tryCatchSagaFactory,
  TryCatchSagaOptions
} from './try-catch-saga';

export type FetchSagaOptionsAPI<T> = {
  method: T;
  args?: any[];
  callback: (res: any, payload: any) => void;
};

export type FetchSagaOptions<T, S> = {
  pattern: keyof T & string;
  actions: T;
  api: FetchSagaOptionsAPI<S>;
  cache: string;
  config: TryCatchSagaOptions;
};

export const fetchSagaFactory = <T, S>({
  pattern,
  actions,
  api: { method, args = [], callback = res => res },
  cache = '',
  config
}: FetchSagaOptions<T & CaseReducerActions<any> & DefaultActions, S & Fn>) => {
  const tryCatchSaga = tryCatchSagaFactory(actions);
  const patternFulfilled = `${pattern}Fulfilled`;

  const watcherAction = actions[pattern];
  const fulFilledAction = actions[patternFulfilled];
  if (!watcherAction) {
    throw new Error(`patter: ${pattern} in actions not found`);
  }

  if (!fulFilledAction) {
    throw new Error(`patter: ${patternFulfilled} in actions not found`);
  }

  const request = tryCatchSaga(function* (action: ActionWithPayload<any>) {
    if (cache) {
      const item: any = yield select((state: RootState | any) =>
        cache
          .split('.')
          .reduce(
            (acc, key: any | keyof ValueOf<RootState> | keyof RootState) => {
              try {
                return acc[key];
              } catch (error) {
                throw new Error('[selectorHookFactory] Invalid selector');
              }
            },
            state
          )
      );

      const isArray = Array.isArray(item);

      if (isArray ? item?.length > 0 : !!item) {
        return put(actions?.setLoading(false));
      }
    }
    // @ts-ignore
    const res = yield call<typeof method>(method, action.payload);
    yield put(fulFilledAction(callback(res, action.payload)));
  }, config);

  return takeLatest(watcherAction, request);
};
