import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { authActions } from './auth.slice';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginFormState } from '@auth/model';
import { commonActions } from '@store/common';
import { authService } from '@auth/services';
import { storageService } from '@services';
import { Called } from '@types';

export const tryCatchSaga = tryCatchSagaFactory(authActions);

export function* requestLogin({
  payload
}: PayloadAction<LoginFormState>) {
  const res: Called<typeof authService.login> = yield call(authService.login, {
    username: payload.email,
    password: payload.password
  });
  yield fork(storageService.setAccessToken, res.token);
  yield put(commonActions.fetchProfile());
}

export function* authRootSaga() {
  yield all([takeLatest(authActions.login, tryCatchSaga(requestLogin))]);
}
