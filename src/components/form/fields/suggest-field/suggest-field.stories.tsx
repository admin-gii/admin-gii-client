import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SuggestField } from './suggest-field.component';
import '@styles/index.css';

export default {
  title: 'Common/SuggestField',
  component: SuggestField,
} as ComponentMeta<typeof SuggestField>

const Template: ComponentStory<typeof SuggestField> = (args) => <SuggestField {...args} />;

export const SuggestFieldInitial = Template.bind({});
SuggestFieldInitial.args = {
}