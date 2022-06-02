import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchField } from './switch-field.component';
import '@styles/index.css';

export default {
  title: 'Common/SwitchField',
  component: SwitchField,
} as ComponentMeta<typeof SwitchField>

const Template: ComponentStory<typeof SwitchField> = (args) => <SwitchField {...args} />;

export const SwitchFieldInitial = Template.bind({});
SwitchFieldInitial.args = {
}