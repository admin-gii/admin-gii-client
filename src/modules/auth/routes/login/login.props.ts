import { authActions, useAuthError, useAuthLoading } from '@auth/store';
import { useProfileSelector } from '@store/common';
import { useDispatch } from 'react-redux';
import { LoginFormState } from '@auth/model';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const initialValues: LoginFormState = {
  email: '',
  password: ''
};

export const useLoginProps = () => {
  const dispatch = useDispatch();
  const profile = useProfileSelector();
  const loading = useAuthLoading();
  const error = useAuthError();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    defaultValues: initialValues
  });

  const handleLogin = ({ email, password }: LoginFormState) => {
    dispatch(
      authActions.login({
        email,
        password
      })
    );
  };

  const handleLockClick = () => {
    setShowPassword(!showPassword);
  }
  
  return {
    loading,
    profile,
    error,
    handleLockClick,
    showPassword,
    handleLogin,
    form
  };
};
