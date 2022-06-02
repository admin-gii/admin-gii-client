import { hoc } from '@utils/hoc';
import { useFormTypesProps } from './form-types.props';
import { FormTypesContainer } from './form-types.style';

/**
 * <FormTypes />
 */
export const FormTypes = hoc(useFormTypesProps, () => (
  <FormTypesContainer>
    Form Types
  </FormTypesContainer>
));
