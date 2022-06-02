import { put, call } from 'redux-saga/effects';

export type ActionWithPayload<T> = {
  payload: T,
  type: string
}

export type ReduxSaga<T> = {
  (action: ActionWithPayload<T>): IterableIterator<any>; 
}

export type TryCatchSagaOptions = {
  disableLoading?: boolean;
  disableError?: boolean;
}

export type DefaultActions = {
  setLoading: (loading: boolean) => ActionWithPayload<boolean>;
  setError: (error: any) => ActionWithPayload<any>;
}

export const tryCatchSagaFactory = <T>(defaultAction: T & DefaultActions) =>
  (saga: ReduxSaga<any>, options: TryCatchSagaOptions = {}) =>
    function* (action: ActionWithPayload<any>) {
      try {
        if (!options.disableLoading) {
          yield put(defaultAction.setLoading(true));
        }
        yield call(saga, action);
      } catch (error) {
        if (!options.disableError) {
          yield put(defaultAction.setError(error));
        }
      } finally {
        if (!options.disableLoading) {
          yield put(defaultAction.setLoading(false));
        }
      }
    };
