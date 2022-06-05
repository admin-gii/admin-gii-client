import { Button, Card, H1, H3 } from '@blueprintjs/core';
import { Error } from '@components/error';
import { InputField } from '@components/form/fields/input-field';
import { SuggestField } from '@components/form/fields/suggest-field';
import { SwitchField } from '@components/form/fields/switch-field';
import { ArrayFieldCounter, ArrayFieldDelete } from '@styles/array-field';
import { FlexContainer, FlexItem } from '@styles/flex-container';
import { Space } from '@styles/space';
import { hoc } from '@utils/hoc';
import { useFormTypeActionProps } from './form-type-action.props';
import { FormTypeActionContainer } from './form-type-action.style';

/**
 * <FormTypeAction />
 */
export const FormTypeAction = hoc(
  useFormTypeActionProps,
  ({
    updatedItem,
    isCreate,
    onSubmit,
    form,
    types,
    selectedType,
    optionsArrayField,
    watchHasRelationField,
    domains
  }) => {
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
          <SuggestField
            control={form.control}
            name='type'
            label='Types'
            items={types}
          />
          <SwitchField name='has_relation' control={form.control} label="Ma'lumot turi bilan bog'lash" />
          {
            selectedType?.multiple && watchHasRelationField && (
              <SuggestField
                control={form.control}
                name='domain_id'
                label='Domains'
                items={domains}
              />
            )
          }
          {selectedType?.multiple && !watchHasRelationField && (
            <>
              <Card>
                <FlexContainer align='center' wrap='wrap'>
                  <FlexItem col={1}>
                    <H3 className='bp4-heading'>Options</H3>
                  </FlexItem>
                  {optionsArrayField.fields.map((field, index) => (
                    <FlexContainer key={field.id} gap='20px'>
                      <FlexItem col={50}>
                        <ArrayFieldCounter>
                          {index === 0 ? '№' : index}
                        </ArrayFieldCounter>
                      </FlexItem>
                      <FlexItem col={2.12}>
                        <InputField
                          control={form.control}
                          type='text'
                          name={`fields.${index}.label`}
                          label='Label'
                          rules={{ required: 'Label-ni kiriting' }}
                        />
                      </FlexItem>
                      <FlexItem col={2.12}>
                        <InputField
                          control={form.control}
                          type='text'
                          name={`fields.${index}.value`}
                          label='Value'
                          rules={{
                            required: 'Valueni kiriting!'
                          }}
                        />
                      </FlexItem>
                      {optionsArrayField.fields.length > 1 && (
                        <FlexItem col={25}>
                          <ArrayFieldDelete>
                            <Button
                              icon={'trash'}
                              minimal={true}
                              onClick={() => optionsArrayField.remove(index)}
                            />
                          </ArrayFieldDelete>
                        </FlexItem>
                      )}
                    </FlexContainer>
                  ))}
                  <FlexItem col={1}>
                    <Button
                      intent='primary'
                      icon='add'
                      onClick={() =>
                        optionsArrayField.prepend({
                          label: '',
                          value: ''
                        })
                      }
                    >
                      Qo'shish
                    </Button>
                  </FlexItem>
                </FlexContainer>
              </Card>

              <Space height='1rem' />
            </>
          )}
          <Button
            type='submit'
            intent='success'
            icon='cloud-upload'
            text='Saqlash'
          />
        </form>
      </FormTypeActionContainer>
    );
  }
);
