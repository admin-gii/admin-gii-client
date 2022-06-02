import { hoc } from '@utils/hoc';
import { AuthLayoutContainer } from './auth-layout.style';

const useAuthLayoutProps = () => ({});

export const AuthLayout = hoc(useAuthLayoutProps, ({ children }) => {
  return (
    <AuthLayoutContainer align='center' justify='center'>
      {children}
    </AuthLayoutContainer>
  );
});
