import { CreateSettingTypeForm } from './setting-type.model' ;
import { parseQueryToString } from '@utils/get-query';
import { useEffect, useState } from 'react';
import {  useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


/**
 * <Settings /> props
 */

export type SettingsProps = {};


const initialValues: CreateSettingTypeForm = {
  first_name: '',
  last_name: '',
  mail: '',
  phone:'',
};



export const useSettingsProps = (_?: SettingsProps) => {
  const history = useHistory();
  const [updatedItem, setUpdatedItem] = useState(null);
  const [isCreate, setIsCreate] = useState(true);
  const form = useForm({
    defaultValues: initialValues,
    mode: 'onBlur'
  });

  const onSubmit = (values: CreateSettingTypeForm) => {
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
    form,
  };
};

