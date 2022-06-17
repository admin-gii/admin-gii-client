import { PayloadAction } from '@reduxjs/toolkit';
import { CreateRoleForm } from '@roles/model';
import { rolesService } from '@roles/services';
import { Called, PayloadWithCallback } from '@types';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { rolesActions } from './roles.slice';


export const tryCatchSaga = tryCatchSagaFactory(rolesActions);

export function* requestRoles() {
  const res: Called<typeof rolesService.getRoles> = yield call(rolesService.getRoles);
  yield put(rolesActions.fetchRolesFulfilled(res.data));
}

export function* requestAddRole(action: PayloadAction<PayloadWithCallback<CreateRoleForm>>) {
  yield call(rolesService.addRole, action.payload.data);
  yield call(action.payload.callback);
}

export function* rolesRootSaga() {
  yield all([
    takeLatest(rolesActions.fetchRoles, tryCatchSaga(requestRoles)),
    takeLatest(rolesActions.addRole, tryCatchSaga(requestAddRole)),
  ]);
}
