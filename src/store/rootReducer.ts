import { authReducer } from '@auth/store';
import { rolesReducer } from '@roles/store';
import { commonReducer } from './common';

export const rootReducer = {
  auth: authReducer,
  common: commonReducer,
  roles: rolesReducer
};
