import { CreateRoleForm } from "@roles/model";
import { rolesActions } from "@roles/store";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

/**
 * <RolesAction /> props
 */
export type RolesActionProps = {

}

const initialValues: CreateRoleForm = {
  name: '',
  slug: ''
};

export const useRolesActionProps = (_?: RolesActionProps) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const form = useForm({
    defaultValues: initialValues,
    mode: 'onBlur'
  });

  const onSubmit = (values: CreateRoleForm) => {
    dispatch(rolesActions.addRole({
      data: values,
      callback: () => {
        form.reset();
        history.push('/roles');
      }
    }))
  };
  
  return {
    onSubmit,
    form
  };
};