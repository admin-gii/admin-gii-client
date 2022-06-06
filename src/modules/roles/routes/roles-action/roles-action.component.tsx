import { Button, Card, H1, H3 } from '@blueprintjs/core';
import { Error } from '@components/error';
import { InputField } from '@components/form/fields/input-field';
import { MultipleSelectField } from '@components/form/fields/multiple-select-field';
import { ArrayFieldCounter, ArrayFieldDelete } from '@styles/array-field';
import { FlexContainer, FlexItem } from '@styles/flex-container';
import { Space } from '@styles/space';
import { hoc } from '@utils/hoc';
import { useRolesActionProps } from './roles-action.props';
import { RolesActionContainer } from './roles-action.style';

/**
 * <RolesAction />
 */
export const RolesAction = hoc(
  useRolesActionProps,
  ({
    updatedItem,
    isCreate,
    onSubmit,
    roles,
    form,
    fieldsArrayField,
    fields
  }) => {
    if (!updatedItem && !isCreate)
      return <Error status='404' text='Bunday sahifa topilmadi' />;
    return (
      <RolesActionContainer>
        <H1>Yangi role qo'shish</H1>
        <Space height='2rem' />
        <form className='w-half' onSubmit={form.handleSubmit(onSubmit)}>
          <InputField
            control={form.control}
            type='text'
            name='name'
            label='Nomi'
            rules={{ required: 'Nomini kiriting!' }}
          />
          <InputField
            control={form.control}
            type='text'
            name='slug'
            label='Slag'
            rules={{
              required: 'Slagni kiriting!',
              pattern: {
                value: /^[a-z0-9-_]+$/i,
                message:
                  'Slagda faqat lotin harflar, raqamlar, tire va pastki chiziq bo`ladi'
              }
            }}
          />
          <Space height='1rem' />
          <MultipleSelectField
            control={form.control}
            name='table_fields'
            label="Tablitsada ko'rinadigan field-lar"
            items={fields}
          />
          <Button
            type='submit'
            intent='success'
            icon='cloud-upload'
            text='Saqlash'
          />
        </form>
      </RolesActionContainer>
    );
  }
);
