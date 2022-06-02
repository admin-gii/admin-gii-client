import { all, put, takeLatest } from 'redux-saga/effects';
import { authActions } from './auth.slice';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginFormState } from '@auth/model';
import { commonActions } from '@store/common';

export const tryCatchSaga = tryCatchSagaFactory(authActions);

export function *requestLogin (action: PayloadAction<LoginFormState>) {
  yield put(commonActions.fetchProfileFulfilled({...action.payload}));
}

export function* authRootSaga() {
  yield all([takeLatest(authActions.login, tryCatchSaga(requestLogin))]);
}
