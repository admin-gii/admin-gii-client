import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckboxField } from './checkbox-field.component';
import '@styles/index.css';

export default {
  title: 'Common/CheckboxField',
  component: CheckboxField,
} as ComponentMeta<typeof CheckboxField>

const Template: ComponentStory<typeof CheckboxField> = (args) => <CheckboxField {...args} />;

export const CheckboxFieldInitial = Template.bind({});
CheckboxFieldInitial.args = {
}