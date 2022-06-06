import { Button } from '@blueprintjs/core';
import { InputField } from '@components/form/fields/input-field';
import { hoc } from '@utils/hoc';
import { useSettingsProps } from './settings.props';
import { SettingsContainer } from './settings.style';

/**
 * <Settings />
 */
export const Settings = hoc(
  useSettingsProps,
  ({
    onSubmit,
    form,
  }) => (
    <SettingsContainer>
      <form className='w-half' onSubmit={form.handleSubmit(onSubmit)}>
        <InputField
          control={form.control}
          type='text'
          name='name'
          label='Ism'
          rules={{ required: 'Ismni kiriting!' }}
        />
        <InputField
          control={form.control}
          type='text'
          name='surname'
          label='Familiya'
          rules={{ required: 'Familiyani kiriting!' }}
        />
        <InputField
          control={form.control}
          type='number'
          name='phone'
          label='Telefon'
          rules={{ required: 'Telefonni kiriting!' }}
        />
        <InputField
          control={form.control}
          type='email'
          name='mail'
          label='E-mail'
          rules={{ required: 'E-mailni kiriting!' }}
        />
        <Button 
        intent='primary' 
        icon='add'
        type='submit' >
          Saqlash
        </Button>
      </form>
    </SettingsContainer>
  )
);
