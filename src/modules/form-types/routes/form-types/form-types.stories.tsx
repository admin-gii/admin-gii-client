import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormTypes } from './form-types.component';
import '@styles/index.css';

export default {
  title: 'Common/FormTypes',
  component: FormTypes,
} as ComponentMeta<typeof FormTypes>

const Template: ComponentStory<typeof FormTypes> = (args) => <FormTypes {...args} />;

export const FormTypesInitial = Template.bind({});
FormTypesInitial.args = {
}