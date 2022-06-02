import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  commonActions,
  useReadySelector
} from './store/common';

export const useAppProps = () => {
  const dispatch = useDispatch();
  const ready = useReadySelector();

  useEffect(() => {
    dispatch(commonActions.fetchProfile());

    setTimeout(() => {
      dispatch(commonActions.setReady(true));
    }, 2000);
  }, [dispatch]);

  return {
    ready
  };
};
