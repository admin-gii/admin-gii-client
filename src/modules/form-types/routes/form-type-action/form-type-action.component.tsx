import { Button, H1 } from '@blueprintjs/core';
import { Error } from '@components/error';
import { InputField } from '@components/form/fields/input-field';
import { Space } from '@styles/space';
import { hoc } from '@utils/hoc';
import { useFormTypeActionProps } from './form-type-action.props';
import { FormTypeActionContainer } from './form-type-action.style';

/**
 * <FormTypeAction />
 */
export const FormTypeAction = hoc(useFormTypeActionProps, ({ updatedItem, isCreate, onSubmit, form }) => {
  if (!updatedItem && !isCreate)
    return <Error status='404' text='Bunday sahifa topilmadi' />;
  return (
    <FormTypeActionContainer>
      <H1>Yangi forma turi qo'shish</H1>
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
        <Button
          type='submit'
          intent='success'
          icon='cloud-upload'
          text='Saqlash'
        />
      </form>
    </FormTypeActionContainer>
  );
});
