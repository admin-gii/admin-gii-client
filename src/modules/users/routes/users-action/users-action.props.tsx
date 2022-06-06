import { OptionProps } from '@blueprintjs/core';
import { CreateUserForm } from '@users/model/user.model';
import { parseQueryToString } from '@utils/get-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

/**
 * <UsersAction /> props
 */
export type UsersActionProps = {}

const initialValues: CreateUserForm = {
  email: '',
  phone: '',
  first_name: '',
  last_name: '',
  role: '',
  status: true
};

const roles: OptionProps[] = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' }
];

export const useUsersActionProps = (_?: UsersActionProps) => {
  const history = useHistory();
  const [updatedItem, setUpdatedItem] = useState(null);
  const [isCreate, setIsCreate] = useState(true);
  const form = useForm({
    defaultValues: initialValues,
    mode: 'onBlur'
  });

  const onSubmit = (values: CreateUserForm) => {
    console.log({ values });
  };

  useEffect(() => {
    const searchObject = parseQueryToString(history.location.search);
    if (searchObject.add === 'new') {
      setIsCreate(true);
    } else if (searchObject.edit) {
      setUpdatedItem(searchObject.edit);
    }
  }, [history.location.search]);

  return {
    updatedItem,
    isCreate,
    onSubmit,
    roles,
    form
  };
};
