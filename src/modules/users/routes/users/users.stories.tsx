import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Users } from './users.component';
import '@styles/index.css';

export default {
  title: 'Common/Users',
  component: Users,
} as ComponentMeta<typeof Users>

const Template: ComponentStory<typeof Users> = (args) => <Users {...args} />;

export const UsersInitial = Template.bind({});
UsersInitial.args = {
}