import { hoc } from '@utils/hoc';
import { AuthLayout } from '@auth/components';
import { useLoginProps } from './login.props';
import { Redirect } from 'react-router-dom';
import { FormContainer } from './login.component.styles';
import { Button } from '@blueprintjs/core';
import { InputField } from '@components/form/fields/input-field';

export const Login = hoc(
  useLoginProps,
  ({ profile, handleLockClick, showPassword, handleLogin, form }) => {
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
        <FormContainer
          onSubmit={form.handleSubmit(handleLogin)}
        >
          <InputField
            control={form.control}
            type='text'
            name='email'
            label='Email'
            rules={{ required: 'Emailni kiriting!' }}
          />
          <InputField
            name='password'
            label='Parol'
            control={form.control}
            rules={{ required: 'Parolni kiriting!' }}
            type={showPassword ? 'text' : 'password'}
            rightElement={lockButton}
          />
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
