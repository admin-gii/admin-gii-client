// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions, useAuthError, useAuthLoading } from '@auth/store';
import { useProfileSelector } from '@store/common';
import { useDispatch } from 'react-redux';
import { LoginFormState } from '@auth/model';
import { useState } from 'react';
import { useCustomForm } from '@hooks';

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
  const {register, handleSubmit} = useCustomForm({
    defaultValues: initialValues
  });

  // const history = useHistory();

  const handleLogin = ({ email, password }: LoginFormState) => {
    console.log(email, password);
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
    handleSubmit,
    register,
    handleLogin
  };
};
