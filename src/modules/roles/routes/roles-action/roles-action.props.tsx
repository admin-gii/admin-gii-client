import { RoleModel } from '@model';
import { CreateRoleForm } from '@roles/model';
import { rolesActions } from '@roles/store';
import { parseQueryToString } from '@utils/get-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * <RolesAction /> props
 */
export type RolesActionProps = {};

const initialValues: CreateRoleForm = {
  name: '',
  slug: ''
};

export const useRolesActionProps = (_?: RolesActionProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [updatedItem, setUpdatedItem] = useState<RoleModel | null>(null);
  const [isCreate, setIsCreate] = useState(true);
  const form = useForm({
    defaultValues: initialValues,
    mode: 'onBlur'
  });

  const onSubmit = (values: CreateRoleForm) => {
    if (isCreate) {
      dispatch(
        rolesActions.addRole({
          data: values,
          callback: () => {
            form.reset();
            history.push('/roles');
          }
        })
      );
    } else if (updatedItem) {
      dispatch(
        rolesActions.updateRole({
          data: { id: updatedItem.id, ...values },
          callback: () => {
            form.reset();
            history.push('/roles');
          }
        })
      );
    }
  };

  useEffect(() => {
    const searchObject = parseQueryToString(history.location.search);
    if (searchObject.add === 'new') {
      setIsCreate(true);
    } else if (searchObject.edit) {
      setIsCreate(false)
      dispatch(
        rolesActions.fetchRole({
          data: searchObject.edit,
          callback: (data: RoleModel) => {
            setUpdatedItem(data);
            form.setValue('name', data.name);
            form.setValue('slug', data.slug);
          }
        })
      );
    }
  }, [dispatch, form, history.location.search]);

  return {
    onSubmit,
    updatedItem,
    isCreate,
    form
  };
};
