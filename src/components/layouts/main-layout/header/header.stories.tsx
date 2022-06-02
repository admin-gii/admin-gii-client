import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './header.component';
import '@styles/index.css';

export default {
  title: 'Layouts/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderInitial = Template.bind({});
HeaderInitial.args = {
}