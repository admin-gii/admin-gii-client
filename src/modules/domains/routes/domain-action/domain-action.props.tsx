import { OptionProps } from '@blueprintjs/core';
import { CreateDomainForm } from '@domains/model';
import { parseQueryToString } from '@utils/get-query';
import { useEffect, useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

/**
 * <DomainAction /> props
 */
export type DomainActionProps = {};

const initialValues: CreateDomainForm = {
  name: '',
  slug: '',
  roles: [],
  fields: [{ name: '', slug: '', id: 'nx172eg2x61e71nxf2' }],
  table_fields: [],
  form_fields: [{ field_value: '', form_type_id: '', id: 'nx172eg2x61e71nxf3' }]
};

const roles: OptionProps[] = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' }
];

const formTypes: OptionProps[] = [
  { label: 'Text input', value: '1' },
  { label: 'Number input', value: '2' }
]

export const useDomainActionProps = (_?: DomainActionProps) => {
  const history = useHistory();
  const [updatedItem, setUpdatedItem] = useState(null);
  const [isCreate, setIsCreate] = useState(true);
  const form = useForm({
    defaultValues: initialValues,
    mode: 'onBlur'
  });
  const fieldsArrayField = useFieldArray({
    control: form.control,
    name: 'fields'
  });

  const formFieldsArrayField = useFieldArray({
    control: form.control,
    name: 'form_fields'
  })

  const onSubmit = (values: CreateDomainForm) => {
    console.log({ values });
  };

  const fields = useMemo(
    () =>
      fieldsArrayField.fields
        ?.filter((_, i) => i !== 0)
        ?.map(field => ({
          label: field.name,
          value: field.slug
        })) || [],
    [fieldsArrayField.fields]
  );

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
    form,
    fieldsArrayField,
    fields,
    formFieldsArrayField,
    formTypes
  };
};
