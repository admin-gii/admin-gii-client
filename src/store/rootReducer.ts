import { authReducer } from '@auth/store';
import { commonReducer } from './common';

export const rootReducer = {
  auth: authReducer,
  common: commonReducer
};
