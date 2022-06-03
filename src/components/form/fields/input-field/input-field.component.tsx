import { FormGroup, InputGroup } from '@blueprintjs/core';
import { hoc } from '@utils/hoc';
import { Controller } from 'react-hook-form';
import { useInputFieldProps } from './input-field.props';

/**
 * <InputField />
 */
export const InputField = hoc(
  useInputFieldProps,
  ({ name, control, rules, helperText, label, ...rest }) => (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur, ref },
        fieldState: { error }
      }) => (
        <FormGroup
          helperText={error?.message || helperText}
          label={label}
          labelFor={`${name}-input`}
          labelInfo={rules?.required && '(majburiy)'}
          intent={error ? 'danger' : 'none'}
        >
          <InputGroup
            {...rest}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            id={`${name}-input`}
            inputRef={ref}
          />
        </FormGroup>
      )}
    />
  )
);
