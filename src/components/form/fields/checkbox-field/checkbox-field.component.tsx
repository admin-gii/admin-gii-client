import { hoc } from '@utils/hoc';
import { useCheckboxFieldProps } from './checkbox-field.props';
import { CheckboxFieldContainer } from './checkbox-field.style';

/**
 * <CheckboxField />
 */
export const CheckboxField = hoc(useCheckboxFieldProps, () => (
  <CheckboxFieldContainer>
    {/* content */}
    {/* content */}
    {/* content */}
  </CheckboxFieldContainer>
));
