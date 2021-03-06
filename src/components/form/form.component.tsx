import { hoc } from '@utils/hoc';
import { FormProvider } from 'react-hook-form';
import { useFormProps } from './form.props';
import { FormContainer } from './form.style';

/**
 * <Form />
 */
export const Form = hoc(useFormProps, ({ form, onSubmit, onError, children }) => (
  <FormProvider {...form}>
    <FormContainer onSubmit={form.handleSubmit(onSubmit, onError)}>
      {children}
    </FormContainer>
  </FormProvider>
));
