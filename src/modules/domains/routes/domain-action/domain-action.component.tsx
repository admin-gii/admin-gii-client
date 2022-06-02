import { Button, FormGroup, InputGroup, MenuItem, OptionProps } from '@blueprintjs/core';
import { MultiSelect } from '@blueprintjs/select';
import { Error } from '@components/error';
import { hoc } from '@utils/hoc';
import { useDomainActionProps } from './domain-action.props';
import { DomainActionContainer } from './domain-action.style';

/**
 * <DomainAction />
 */
const RolesMultiSelect = MultiSelect.ofType<OptionProps>();

export const DomainAction = hoc(
  useDomainActionProps,
  ({
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
  }) => {
    if (!updatedItem && !isCreate)
      return <Error status='404' text='Bunday sahifa topilmadi' />;
    return (
      <DomainActionContainer>
        <form className='w-half' onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            label='Nomi'
            labelFor='name-input'
            labelInfo='(*)'
            intent={errors.name ? 'danger' : 'success'}
            helperText={errors.name?.message}
          >
            <InputGroup
              id='name-input'
              placeholder='Nomini kiriting'
              {...register('name', { required: 'Majburiy maydon' })}
            />
          </FormGroup>
          <FormGroup
            label='Slag'
            labelFor='slug-input'
            labelInfo='(*)'
            intent={errors.slug ? 'danger' : 'success'}
            helperText={errors.slug?.message}
          >
            <InputGroup
              id='slug-input'
              placeholder='Slagini kiriting'
              {...register('slug', {
                required: 'Majburiy maydon',
                pattern: {
                  value: /^[a-z0-9-_]+$/i,
                  message:
                    'Slagda faqat lotin harflar, raqamlar, tire va pastki chiziq bo`ladi'
                }
              })}
            />
          </FormGroup>
          <RolesMultiSelect
            items={roles}
            tagRenderer={roleTagRenderer}
            itemRenderer={roleItemRenderer}
            onItemSelect={onRoleItemSelect}
            selectedItems={selectedRoles}
            noResults={<MenuItem disabled={true} text="No results." />}
            tagInputProps={{
              onRemove: handleRoleRemove,
              rightElement: roleClearButton,
            }}
            fill
          />
          <Button
            type='submit'
            intent='success'
            icon='cloud-upload'
            text='Saqlash'
          />
        </form>
      </DomainActionContainer>
    );
  }
);
