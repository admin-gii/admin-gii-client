import { LoginFormState } from '@auth/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selectorHookFactory } from '@utils/selector-hook-factory';

const name = 'auth';

export type AuthState = {
  loading: boolean;
  tokens: {
    accessToken: string;
    refreshToken: string;
  } | null;
  error: any;
}

const initialState: AuthState = {
  loading: false,
  tokens: null,
  error: null
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name,
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    logout(state) {
      state.tokens = null;
    },
    login(state, payload: PayloadAction<LoginFormState>) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    refreshToken(state) {
      state.loading = true;
    }
  }
});

export const useAuthSelector = selectorHookFactory(name);
export const useAuthLoading = () => useAuthSelector('loading');
export const useAuthError = () => useAuthSelector('error');
