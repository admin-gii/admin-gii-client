import {
  FieldPath,
  FieldValues,
  RefCallBack,
  RegisterOptions,
  useForm,
  UseFormProps,
  UseFormRegisterReturn,
  UseFormReturn
} from 'react-hook-form';

export type CustomRegisterType = UseFormRegisterReturn & {
  inputRef?: RefCallBack;
};

export type CustomUseFormReturn<TFieldValues, TContext> = Omit<
  UseFormReturn<TFieldValues, TContext>,
  'register'
> & {
  register: <
    TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  >(
    name: TFieldName,
    options?: RegisterOptions<TFieldValues, TFieldName>
  ) => CustomRegisterType;
};

export const useCustomForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>(
  args: UseFormProps<TFieldValues, TContext>
): CustomUseFormReturn<TFieldValues, TContext> => {
  const { register, ...form } = useForm(args);

  const customRegister = <
    TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  >(
    name: TFieldName,
    options?: RegisterOptions<TFieldValues, TFieldName>
  ): CustomRegisterType => {
    const { ref, ...registerResult } = register(name, options);
    return {
      ...registerResult,
      ref,
      inputRef: ref
    };
  };

  return {
    ...form,
    register: customRegister
  };
};
