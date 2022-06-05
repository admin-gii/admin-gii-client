import { MenuItem, OptionProps } from "@blueprintjs/core";
import { ItemRenderer } from "@blueprintjs/select";
import { useEffect, useState } from "react";
import { Control, ControllerProps, useController } from "react-hook-form";

/**
 * <SuggestField /> props
 */
export type SuggestFieldProps = {
  items: OptionProps[];
  name: string;
  helperText?: string;
  label?: string;
  rules?: ControllerProps['rules'];
  control: Control<any>;
}

export const useSuggestFieldProps = (props?: SuggestFieldProps) => {
  const [selectedItem, setSelectedItem] = useState<OptionProps | null>(null);
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({
    name: props.name,
    rules: props.rules,
    control: props.control
  });

  const onItemItemSelect = (item: OptionProps) => {
    onChange(item.value);
  };

  const inputValueRenderer = (item: OptionProps) => item.label;

  const itemRenderer: ItemRenderer<OptionProps> = (item: OptionProps, { handleClick, handleFocus, modifiers, index }) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            key={item.value}
            onClick={handleClick}
            onFocus={handleFocus}
            text={`${index}. ${item.label}`}
        />
    );
};


  useEffect(() => {
    if (props.items?.length <= 0) return
    const item = props.items.find(item => item.value === value);
    setSelectedItem(item);
  }, [props.items, value])

  return {
    onItemItemSelect,
    inputValueRenderer,
    error,
    itemRenderer,
    selectedItem
  };
};

