import { OptionProps } from '@blueprintjs/core';
import { CreateSettingTypeForm } from './setting-type.model' ;
import { parseQueryToString } from '@utils/get-query';
import { useEffect, useState } from 'react';
import {  useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


/**
 * <Settings /> props
 */

export type SettingsProps = {};


export type TypeOptionGroup = {
  multiple?: boolean;
} & OptionProps;

const initialValues: CreateSettingTypeForm = {
  name: '',
  surname: '',
  mail: '',
  phone:'',
};

const types: TypeOptionGroup[] = [
  { label: 'Text', value: 'text' },
  { label: 'Number', value: 'number' },
  { label: 'Email', value: 'email' },
  { label: 'Textarea', value: 'textarea' },
  { label: 'Select', value: 'select', multiple: true },
  { label: 'Checkbox', value: 'checkbox', multiple: true },
  { label: 'Radio', value: 'radio', multiple: true },
  { label: 'Date', value: 'date' },
  { label: 'Time', value: 'time' },
  { label: 'Datetime', value: 'datetime' },
  { label: 'File', value: 'file' },
  { label: 'Hidden', value: 'hidden' },
  { label: 'Password', value: 'password' },
  { label: 'Url', value: 'url' },
  { label: 'Color', value: 'color' },
  { label: 'Range', value: 'range' },
  { label: 'Tel', value: 'tel' },
  { label: 'Search', value: 'search' }
];

const domains: OptionProps[] = [{ label: 'Mock domain 1', value: 'domain_1' }];
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
    types,
    domains
  };
};

