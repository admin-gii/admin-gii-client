import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UsersAction } from './users-action.component';
import '@styles/index.css';

export default {
  title: 'Common/UsersAction',
  component: UsersAction,
} as ComponentMeta<typeof UsersAction>

const Template: ComponentStory<typeof UsersAction> = (args) => <UsersAction {...args} />;

export const UsersActionInitial = Template.bind({});
UsersActionInitial.args = {
}