import { hoc } from '@utils/hoc';
import { AuthLayout } from '@auth/components';
import { useLoginProps } from './login.props';
import { Redirect } from 'react-router-dom';
import { FormContainer } from './login.component.styles';
import { Button, InputGroup, Label } from '@blueprintjs/core';

export const Login = hoc(
  useLoginProps,
  ({
    profile,
    handleLockClick,
    showPassword,
    handleSubmit,
    register,
    handleLogin
  }) => {
    if (profile) {
      return <Redirect to='/' />;
    }
    const lockButton = (
      <Button
        icon={showPassword ? 'unlock' : 'lock'}
        minimal={true}
        onClick={handleLockClick}
      />
    );
    
    return (
      <AuthLayout>
        <FormContainer onSubmit={handleSubmit(handleLogin)}>
          <Label>
            Email
            <InputGroup
              {...register('email', { required: true })}
              placeholder='Email-ni kiriting'
              type='email'
            />
          </Label>
          <Label>
            Parol
            <InputGroup
              {...register('password', { required: true })}
              placeholder='Parolni kiriting'
              rightElement={lockButton}
              type={showPassword ? 'text' : 'password'}
            />
          </Label>
          <Button
            type='submit'
            rightIcon='lock'
            intent='success'
            text='Kirish'
          />
        </FormContainer>
      </AuthLayout>
    );
  },
  'Login'
);
