import { ReactNode } from "react";
import { Control, ControllerProps, useController } from "react-hook-form";

/**
 * <SwitchField /> props
 */
export type SwitchFieldProps = {
  name: string;
  helperText?: string;
  label?: ReactNode;
  rules?: ControllerProps['rules'];
  control: Control<any>;
}

export const useSwitchFieldProps = (props?: SwitchFieldProps) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({
    name: props.name,
    rules: props.rules,
    control: props.control
  });

  return { value, error, onChange }
};

