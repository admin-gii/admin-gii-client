import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selectorHookFactory } from '@utils/selector-hook-factory';

const name = 'common';

type CommonState = {
  loading: boolean;
  error: any;
  profile: any;
  ready: boolean;
}

const initialState: CommonState = {
  loading: false,
  error: null,
  profile: null,
  ready: false
};

export const { actions: commonActions, reducer: commonReducer } = createSlice({
  name,
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.ready = true;
    },

    setReady(state, action: PayloadAction<boolean>) {
      state.ready = action.payload;
    },

    fetchProfile(state) {
      state.loading = true;
    },

    fetchProfileFulfilled(state, action) {
      state.profile = action.payload;
    },

    removeProfile(state) {
      state.profile = null;
      state.ready = true;
    }
  }
});

export const useCommonSelector = selectorHookFactory(name);

export const useProfileSelector = () => useCommonSelector('profile');
export const useReadySelector = () => useCommonSelector('ready');
