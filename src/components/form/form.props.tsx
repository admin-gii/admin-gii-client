import { useCustomForm } from "@hooks";

/**
 * <Form /> props
 */
export type FormProps = {
  form: ReturnType<typeof useCustomForm>;
  onSubmit: (values: unknown) => void;
  onError?: (errors: unknown) => void;
}

export const useFormProps = (_?: FormProps) => ({});

