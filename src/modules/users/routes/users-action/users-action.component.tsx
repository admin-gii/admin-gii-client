import { hoc } from '@utils/hoc';
import { useUsersActionProps } from './users-action.props';
import { UsersActionContainer } from './users-action.style';
import { Button, H1 } from '@blueprintjs/core';
import { Error } from '@components/error';
import { InputField } from '@components/form/fields/input-field';
import { Space } from '@styles/space';
import { SwitchField } from '@components/form/fields/switch-field';
import { SuggestField } from '@components/form/fields/suggest-field';
/**
 * <UsersAction />
 */
export const UsersAction = hoc(useUsersActionProps,
  ({ updatedItem, isCreate, onSubmit, roles, form }) => {
    if (!updatedItem && !isCreate)
      return <Error status='404' text='Bunday sahifa topilmadi' />;
    return (
  <UsersActionContainer>
        <H1>Yangi foydalanuvchi qo'shish</H1>
        <Space height='2rem' />
        <form className='w-half' onSubmit={form.handleSubmit(onSubmit)}>
        <InputField
            control={form.control}
            type='email'
            name='email'
            label='Email'
            rules={{ required: 'Emailingizni kiriting!' }}
          />
          <InputField
            control={form.control}
            type='phone'
            name='phone'
            label='Telefon'
            rules={{ required: 'Telefon raqamingizni kiriting!' }}
          />
          <InputField
            control={form.control}
            type='text'
            name='first_name'
            label='Ism'
            rules={{ required: 'Ismingizni kiriting!' }}
          />
          <InputField
            control={form.control}
            type='text'
            name='last_name'
            label='Familiya'
            rules={{ required: 'Familiyangizni kiriting!' }}
          />
          <SwitchField name='status' control={form.control} label='Holati' />
          <SuggestField
            control={form.control}
            name='role'
            label='Rollar'
            items={roles}
          />
          <Space height='1rem' />
          <Button
            type='submit'
            intent='success'
            icon='cloud-upload'
            text='Saqlash'
          />
        </form>
  </UsersActionContainer>
    );
  }
);