import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DomainAction } from './domain-action.component';
import '@styles/index.css';

export default {
  title: 'Common/DomainAction',
  component: DomainAction,
} as ComponentMeta<typeof DomainAction>

const Template: ComponentStory<typeof DomainAction> = (args) => <DomainAction {...args} />;

export const DomainActionInitial = Template.bind({});
DomainActionInitial.args = {
}