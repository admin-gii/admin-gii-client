import { RoleModel } from '@model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    fetchRolesFulfilled(state, action: PayloadAction<RoleModel[]>) {
      state.roles = action.payload;
    }
  }
});

export const useRolesSelector = selectorHookFactory(name);
export const useRolesLoading = () => useRolesSelector<boolean>('loading');
export const useRolesList = () => useRolesSelector<RoleModel[]>('roles');
export const useRolesError = () => useRolesSelector<any>('error');
