import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './login.component';
import '@styles/index.css';

export default {
  title: 'Auth/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args) => (<Login {...args} />
);

export const LoginInitial = Template.bind({});
LoginInitial.args = {
}