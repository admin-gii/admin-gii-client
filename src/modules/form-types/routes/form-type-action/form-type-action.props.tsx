import { OptionProps } from "@blueprintjs/core";
import { CreateFormTypeForm } from "@form-types/model";
import { parseQueryToString } from "@utils/get-query";
import { useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

/**
 * <FormTypeAction /> props
 */
export type FormTypeActionProps = {

}

export type TypeOptionGroup = {
  multiple?: boolean;
} & OptionProps;

const initialValues: CreateFormTypeForm = {
  name: '',
  slug: '',
  type: '',
  options: [{ label: '', value: '', id: 'nx172eg2x61e71nxf2' }]
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
  { label: 'Search', value: 'search' },
]

export const useFormTypeActionProps = (_?: FormTypeActionProps) => {
  const history = useHistory();
  const [updatedItem, setUpdatedItem] = useState(null);
  const [isCreate, setIsCreate] = useState(true);
  const form = useForm({
    defaultValues: initialValues,
    mode: 'onBlur'
  });

  const optionsArrayField = useFieldArray({
    control: form.control,
    name: 'options'
  });

  const onSubmit = (values: CreateFormTypeForm) => {
    console.log({ values });
  };

  const watchTypeField = form.watch('type')

  const selectedType = useMemo<TypeOptionGroup>(() => types.find(type => type.value === watchTypeField), [watchTypeField])

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
    selectedType,
    optionsArrayField
  };
};

