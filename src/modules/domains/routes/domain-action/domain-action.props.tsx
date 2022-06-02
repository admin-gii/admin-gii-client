import { Button, MenuItem, OptionProps } from '@blueprintjs/core';
import { ItemRenderer } from '@blueprintjs/select';
import { CreateDomainForm } from '@domains/model';
import { useCustomForm } from '@hooks';
import { parseQueryToString } from '@utils/get-query';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * <DomainAction /> props
 */
export type DomainActionProps = {};

const initialValues: CreateDomainForm = {
  name: '',
  slug: ''
};

const roles: OptionProps[] = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' }
];

export const useDomainActionProps = (_?: DomainActionProps) => {
  const history = useHistory();
  const [updatedItem, setUpdatedItem] = useState(null);
  const [isCreate, setIsCreate] = useState(true);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useCustomForm({
    defaultValues: initialValues,
    mode: 'onBlur'
  });

  const onSubmit = (values: CreateDomainForm) => {};

  const onRoleItemSelect = (item: OptionProps) => {
    const isSelected = findSelectedRole(item);
    if (isSelected) {
      setSelectedRoles(selectedRoles.filter(role => role.value !== item.value));
    } else {
      setSelectedRoles([...selectedRoles, item]);
    }
  };

  const roleTagRenderer = (item: OptionProps) => item.label;

  const findSelectedRole = (item: OptionProps) => {
    return selectedRoles.find(role => role.value === item.value);
  };

  const handleRoleRemove = (label: string, index: number) => {
    setSelectedRoles(selectedRoles.filter((role, i) => i !== index));
  }

  const roleItemRenderer: ItemRenderer<OptionProps> = (
    item: OptionProps,
    { modifiers, index, handleClick }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        selected={modifiers.active}
        icon={findSelectedRole(item) ? 'tick' : 'blank'}
        key={item.value}
        onClick={handleClick}
        text={`${index}. ${item.label}`}
        shouldDismissPopover={false}
      />
    );
  };

  const roleClearButton =
            selectedRoles.length > 0 ? <Button icon="cross" minimal={true} onClick={() => setSelectedRoles([])} /> : undefined;

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
    handleSubmit,
    onSubmit,
    register,
    errors,
    roles,
    roleTagRenderer,
    roleItemRenderer,
    onRoleItemSelect,
    selectedRoles,
    roleClearButton,
    handleRoleRemove
  };
};
