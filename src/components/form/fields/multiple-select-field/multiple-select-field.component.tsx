import { FormGroup, MenuItem } from '@blueprintjs/core';
import { MultiSelect } from '@blueprintjs/select';
import { hoc } from '@utils/hoc';
import { useMultipleSelectFieldProps } from './multiple-select-field.props';

/**
 * <MultipleSelectField />
 */
export const MultipleSelectField = hoc(
  useMultipleSelectFieldProps,
  ({
    items,
    itemTagRenderer,
    itemRenderer,
    onItemItemSelect,
    itemClearButton,
    handleItemRemove,
    name,
    label,
    rules,
    helperText,
    error,
    selectedItems
  }) => (
    <FormGroup
      helperText={error?.message || helperText}
      label={label}
      labelFor={`${name}-input`}
      labelInfo={rules?.required && '(majburiy)'}
      intent={error ? 'danger' : 'none'}
    >
      <MultiSelect
        items={items}
        tagRenderer={itemTagRenderer}
        itemRenderer={itemRenderer}
        onItemSelect={onItemItemSelect}
        selectedItems={selectedItems || []}
        noResults={<MenuItem disabled={true} text='No results.' />}
        tagInputProps={{
          onRemove: handleItemRemove,
          rightElement: itemClearButton
        }}
        fill
      />
    </FormGroup>
  )
);
