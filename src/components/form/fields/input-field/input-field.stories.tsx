import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField } from './input-field.component';
import '@styles/index.css';

export default {
  title: 'Common/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const InputFieldInitial = Template.bind({});
InputFieldInitial.args = {
}