import { Button, Card, H1, H3 } from '@blueprintjs/core';
import { Error } from '@components/error';
import { InputField } from '@components/form/fields/input-field';
import { MultipleSelectField } from '@components/form/fields/multiple-select-field';
import { SuggestField } from '@components/form/fields/suggest-field';
import { ArrayFieldCounter, ArrayFieldDelete } from '@styles/array-field';
import { FlexContainer, FlexItem } from '@styles/flex-container';
import { Space } from '@styles/space';
import { hoc } from '@utils/hoc';
import { useDomainActionProps } from './domain-action.props';
import { DomainActionContainer } from './domain-action.style';

/**
 * <DomainAction />
 */

export const DomainAction = hoc(
  useDomainActionProps,
  ({
    updatedItem,
    isCreate,
    onSubmit,
    roles,
    form,
    fieldsArrayField,
    fields,
    formFieldsArrayField,
    formTypes
  }) => {
    if (!updatedItem && !isCreate)
      return <Error status='404' text='Bunday sahifa topilmadi' />;
    return (
      <DomainActionContainer>
        <H1>Yangi ma'lumot turi qo'shish</H1>
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
          <MultipleSelectField
            control={form.control}
            name='roles'
            label='Rollar'
            items={roles}
          />
          <Card>
            <FlexContainer align='center' wrap='wrap'>
              <FlexItem col={1}>
                <H3 className='bp4-heading'>Domain fields</H3>
              </FlexItem>
              {fieldsArrayField.fields.map((field, index) => (
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
                      name={`fields.${index}.name`}
                      label='Fieldni nomi'
                      rules={{ required: 'Nomini kiriting!' }}
                    />
                  </FlexItem>
                  <FlexItem col={2.12}>
                    <InputField
                      control={form.control}
                      type='text'
                      name={`fields.${index}.slug`}
                      label='Fieldni slagi'
                      rules={{
                        required: 'Slagni kiriting!',
                        pattern: {
                          value: /^[a-z0-9-_]+$/i,
                          message:
                            'Slagda faqat lotin harflar, raqamlar, tire va pastki chiziq bo`ladi'
                        }
                      }}
                    />
                  </FlexItem>
                  {fieldsArrayField.fields.length > 1 && (
                    <FlexItem col={25}>
                      <ArrayFieldDelete>
                        <Button
                          icon={'trash'}
                          minimal={true}
                          onClick={() => fieldsArrayField.remove(index)}
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
                    fieldsArrayField.prepend({
                      name: '',
                      slug: ''
                    })
                  }
                >
                  Qo'shish
                </Button>
              </FlexItem>
            </FlexContainer>
          </Card>
          <Space height='1rem' />
          {fields.length > 0 && (
            <>
              <MultipleSelectField
                control={form.control}
                name='table_fields'
                label="Tablitsada ko'rinadigan field-lar"
                items={fields}
              />
              <Card>
                <FlexContainer align='center' wrap='wrap'>
                  <FlexItem col={1}>
                    <H3 className='bp4-heading'>Form Field-larni qo'shish</H3>
                  </FlexItem>
                  {formFieldsArrayField.fields.map((field, index) => (
                    <FlexContainer key={field.id} gap='20px'>
                      <FlexItem col={50}>
                        <ArrayFieldCounter>
                          {index === 0 ? '№' : index}
                        </ArrayFieldCounter>
                      </FlexItem>
                      <FlexItem col={2.12}>
                        <SuggestField
                          control={form.control}
                          name={`form_fields.${index}.field_value`}
                          label='Field-ni nomi'
                          items={fields}
                        />
                      </FlexItem>
                      <FlexItem col={2.12}>
                        <SuggestField
                          control={form.control}
                          name={`form_fields.${index}.form_type_id`}
                          label='Form Type-ni nomi'
                          items={formTypes}
                        />
                      </FlexItem>
                      {formFieldsArrayField.fields.length > 1 && (
                        <FlexItem col={25}>
                          <ArrayFieldDelete>
                            <Button
                              icon={'trash'}
                              minimal={true}
                              onClick={() => formFieldsArrayField.remove(index)}
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
                        formFieldsArrayField.prepend({
                          name: '',
                          slug: ''
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
      </DomainActionContainer>
    );
  }
);
