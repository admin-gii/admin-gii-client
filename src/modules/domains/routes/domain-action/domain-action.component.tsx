import { Button } from '@blueprintjs/core';
import { Error } from '@components/error';
import { InputField } from '@components/form/fields/input-field';
import { MultipleSelectField } from '@components/form/fields/multiple-select-field';
import { hoc } from '@utils/hoc';
import { useDomainActionProps } from './domain-action.props';
import { DomainActionContainer } from './domain-action.style';

/**
 * <DomainAction />
 */

export const DomainAction = hoc(
  useDomainActionProps,
  ({ updatedItem, isCreate, onSubmit, roles, form }) => {
    if (!updatedItem && !isCreate)
      return <Error status='404' text='Bunday sahifa topilmadi' />;
    return (
      <DomainActionContainer>
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
          <MultipleSelectField
            control={form.control}
            name='roles'
            label='Rollar'
            items={roles}
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
