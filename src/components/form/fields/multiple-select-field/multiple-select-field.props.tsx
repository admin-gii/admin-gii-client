import { Button, MenuItem, OptionProps } from '@blueprintjs/core';
import { ItemRenderer } from '@blueprintjs/select';
import { useEffect, useMemo, useState } from 'react';
import { Control, ControllerProps, useController } from 'react-hook-form';

/**
 * <MultipleSelectField /> props
 */
export type MultipleSelectFieldProps = {
  items: OptionProps[];
  name: string;
  helperText?: string;
  label?: string;
  rules?: ControllerProps['rules'];
  control: Control<any>;
};

export const useMultipleSelectFieldProps = (
  props?: MultipleSelectFieldProps
) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const {
    field: { value, onChange, onBlur },
    fieldState: { error }
  } = useController({
    name: props.name,
    rules: props.rules,
    control: props.control
  });

  const onItemItemSelect = (item: OptionProps) => {
    const isSelected = findSelectedItem(item);
    let newItems;
    if (isSelected) {
      newItems = selectedItems.filter(
        selectedItem => selectedItem.value !== item.value
      );
    } else {
      newItems = [...selectedItems, item];
    }
    onChange(newItems.map(selectedItem => selectedItem.value));
  };

  const itemTagRenderer = (item: OptionProps) => item.label;

  const findSelectedItem = (item: OptionProps) => {
    return selectedItems.find(
      selectedItem => selectedItem.value === item.value
    );
  };

  const handleItemRemove = (label: string, index: number) => {
    onChange(selectedItems.filter((_, i) => i !== index).map(selectedItem => selectedItem.value));
  };

  const itemRenderer: ItemRenderer<OptionProps> = (
    item: OptionProps,
    { modifiers, index, handleClick }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        selected={modifiers.active}
        icon={findSelectedItem(item) ? 'tick' : 'blank'}
        key={item.value}
        onClick={handleClick}
        text={`${index}. ${item.label}`}
        shouldDismissPopover={false}
      />
    );
  };
  const itemClearButton = useMemo(
    () =>
      selectedItems.length > 0 ? (
        <Button
          icon='cross'
          minimal={true}
          onClick={() => setSelectedItems([])}
        />
      ) : undefined,
    [selectedItems]
  );

  useEffect(() => {
    if (props.items?.length <= 0) return

    const items = value.map((val: string) => props.items.find(item => item.value === val))
    setSelectedItems(items);
  }, [props.items, value])

  return {
    itemTagRenderer,
    itemRenderer,
    onItemItemSelect,
    selectedItems,
    itemClearButton,
    handleItemRemove,
    error
  };
};
