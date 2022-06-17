import { RoleModel } from '@model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateRoleForm } from '@roles/model';
import { PayloadWithCallback } from '@types';
import { selectorHookFactory } from '@utils/selector-hook-factory';

const name = 'roles';

export type RolesState = {
  loading: boolean;
  roles: RoleModel[]
  error: any;
}

const initialState: RolesState = {
  loading: false,
  roles: [],
  error: null
};

export const { actions: rolesActions, reducer: rolesReducer } = createSlice({
  name,
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    fetchRoles(state) {
      state.loading = true
    },
    fetchRole(state, action: PayloadAction<PayloadWithCallback<string>>) {
      state.loading = true
    },
    fetchRolesFulfilled(state, action: PayloadAction<RoleModel[]>) {
      state.roles = action.payload;
    },
    addRole(state, action: PayloadAction<PayloadWithCallback<CreateRoleForm>>) {
      state.loading = true
    },
    updateRole(state, action: PayloadAction<PayloadWithCallback<RoleModel>>) {
      state.loading = true
    },
    deleteRole(state, action: PayloadAction<PayloadWithCallback<number>>) {
      state.loading = true
    }
  }
});

export const useRolesSelector = selectorHookFactory(name);
export const useRolesLoading = () => useRolesSelector<boolean>('loading');
export const useRolesList = () => useRolesSelector<RoleModel[]>('roles');
export const useRolesError = () => useRolesSelector<any>('error');
