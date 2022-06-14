import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  commonActions,
  useProfileSelector,
  useReadySelector
} from './store/common';

export const useAppProps = () => {
  const dispatch = useDispatch();
  const ready = useReadySelector();
  const profile = useProfileSelector()

  useEffect(() => {
    dispatch(commonActions.fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      dispatch(commonActions.setReady(true));
    }
  }, [dispatch, profile])

  return {
    ready
  };
};
