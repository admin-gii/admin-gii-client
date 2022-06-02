import { authRootSaga } from '@auth/store';
import { all, fork } from 'redux-saga/effects';
import { commonRootSaga } from './common';

export function* rootSaga() {
  yield all([
    fork(authRootSaga),
    fork(commonRootSaga)
  ]);
}
