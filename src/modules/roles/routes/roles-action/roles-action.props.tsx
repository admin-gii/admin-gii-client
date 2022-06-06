import { OptionProps } from "@blueprintjs/core";
import { CreateRoleForm } from "@roles/model";
import { useForm } from "react-hook-form";

/**
 * <RolesAction /> props
 */
export type RolesActionProps = {

}

const initialValues: CreateRoleForm = {
  name: '',
  slug: ''
};

const roles: OptionProps[] = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' }
];

export const useRolesActionProps = (_?: RolesActionProps) => {
    const form = useForm({
      defaultValues: initialValues,
      mode: 'onBlur'
    });
  
    const onSubmit = (values: CreateRoleForm) => {
      console.log({ values });
    };
  
  return {
    onSubmit,
    roles,
    form
  };
};