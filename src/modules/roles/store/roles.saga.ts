import { RoleModel } from '@model';
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

export function* requestRole(action: PayloadAction<PayloadWithCallback<string>>) {
  const res: Called<typeof rolesService.getRole> = yield call(rolesService.getRole, action.payload.data);
  yield call(action.payload.callback, res.data);
}

export function* requestAddRole(action: PayloadAction<PayloadWithCallback<CreateRoleForm>>) {
  yield call(rolesService.addRole, action.payload.data);
  yield call(action.payload.callback);
}

export function* requestUpdateRole(action: PayloadAction<PayloadWithCallback<RoleModel>>) {
  yield call(rolesService.updateRole, action.payload.data);
  yield call(action.payload.callback);
}

export function *requestDeleteRole(action: PayloadAction<PayloadWithCallback<number>>) {
  yield call(rolesService.deleteRole, action.payload.data);
  yield call(action.payload.callback);
}

export function* rolesRootSaga() {
  yield all([
    takeLatest(rolesActions.fetchRoles, tryCatchSaga(requestRoles)),
    takeLatest(rolesActions.fetchRole, tryCatchSaga(requestRole)),
    takeLatest(rolesActions.addRole, tryCatchSaga(requestAddRole)),
    takeLatest(rolesActions.updateRole, tryCatchSaga(requestUpdateRole)),
    takeLatest(rolesActions.deleteRole, tryCatchSaga(requestDeleteRole)),
  ]);
}
