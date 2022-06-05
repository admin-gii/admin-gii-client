import { FormGroup, MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';
import { hoc } from '@utils/hoc';
import { useSuggestFieldProps } from './suggest-field.props';

/**
 * <SuggestField />
 */
export const SuggestField = hoc(
  useSuggestFieldProps,
  ({
    items,
    inputValueRenderer,
    onItemItemSelect,
    name,
    label,
    rules,
    helperText,
    itemRenderer,
    error,
    selectedItem
  }) => (
    <FormGroup
      helperText={error?.message || helperText}
      label={label}
      labelFor={`${name}-input`}
      labelInfo={rules?.required && '(majburiy)'}
      intent={error ? 'danger' : 'none'}
    >
      <Suggest
        items={items}
        inputValueRenderer={inputValueRenderer}
        onItemSelect={onItemItemSelect}
        itemRenderer={itemRenderer}
        selectedItem={selectedItem}
        noResults={<MenuItem disabled={true} text='No results.' />}
        popoverProps={{minimal: true, fill: true, popoverClassName: 'popover-height'}}
        resetOnClose
        resetOnQuery
        fill
      />
    </FormGroup>
  )
);
