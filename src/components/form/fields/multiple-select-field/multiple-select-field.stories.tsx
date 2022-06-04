import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultipleSelectField } from './multiple-select-field.component';
import '@styles/index.css';

export default {
  title: 'Common/MultipleSelectField',
  component: MultipleSelectField,
} as ComponentMeta<typeof MultipleSelectField>

const Template: ComponentStory<typeof MultipleSelectField> = (args) => <MultipleSelectField {...args} />;

export const MultipleSelectFieldInitial = Template.bind({});
MultipleSelectFieldInitial.args = {
}