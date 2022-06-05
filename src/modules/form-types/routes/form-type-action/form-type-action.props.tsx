import { CreateFormTypeForm } from "@form-types/model";
import { parseQueryToString } from "@utils/get-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

/**
 * <FormTypeAction /> props
 */
export type FormTypeActionProps = {

}

const initialValues: CreateFormTypeForm = {
  name: '',
  slug: ''
};

export const useFormTypeActionProps = (_?: FormTypeActionProps) => {
  const history = useHistory();
  const [updatedItem, setUpdatedItem] = useState(null);
  const [isCreate, setIsCreate] = useState(true);
  const form = useForm({
    defaultValues: initialValues,
    mode: 'onBlur'
  });

  const onSubmit = (values: CreateFormTypeForm) => {
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
    form
  };
};

