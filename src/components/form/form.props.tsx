
/**
 * <Form /> props
 */
export type FormProps = {
  form: any;
  onSubmit: (values: any) => void;
  onError?: (errors: any) => void;
}

export const useFormProps = (_?: FormProps) => ({});

