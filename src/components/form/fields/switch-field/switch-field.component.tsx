import { FormGroup, Switch } from '@blueprintjs/core';
import { hoc } from '@utils/hoc';
import { useSwitchFieldProps } from './switch-field.props';

/**
 * <SwitchField />
 */
export const SwitchField = hoc(useSwitchFieldProps, ({ value, name, helperText, error, onChange, label }) => (
  <FormGroup
    helperText={error?.message || helperText}
    labelFor={`${name}-input`}
    intent={error ? 'danger' : 'none'}
  >
    <Switch checked={value} large id={`${name}-input`} onChange={onChange} labelElement={label} />
  </FormGroup>
));
