import { InputGroupProps2 } from "@blueprintjs/core";
import { Control, ControllerProps } from "react-hook-form";

/**
 * <InputField /> props
 */
export type InputFieldProps = {
  name: string;
  helperText?: string;
  label?: string;
  rules?: ControllerProps['rules'];
  control: Control<any>
} & InputGroupProps2

export const useInputFieldProps = (_?: InputFieldProps) => ({});

