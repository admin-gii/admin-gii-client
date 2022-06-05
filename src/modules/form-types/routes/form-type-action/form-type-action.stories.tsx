import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormTypeAction } from './form-type-action.component';
import '@styles/index.css';

export default {
  title: 'Common/FormTypeAction',
  component: FormTypeAction,
} as ComponentMeta<typeof FormTypeAction>

const Template: ComponentStory<typeof FormTypeAction> = (args) => <FormTypeAction {...args} />;

export const FormTypeActionInitial = Template.bind({});
FormTypeActionInitial.args = {
}