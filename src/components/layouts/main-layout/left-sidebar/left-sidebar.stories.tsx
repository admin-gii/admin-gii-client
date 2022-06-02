import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeftSidebar } from './left-sidebar.component';
import '@styles/index.css';

export default {
  title: 'Layouts/LeftSidebar',
  component: LeftSidebar,
} as ComponentMeta<typeof LeftSidebar>

const Template: ComponentStory<typeof LeftSidebar> = (args) => <LeftSidebar {...args} />;

export const LeftSidebarInitial = Template.bind({});
LeftSidebarInitial.args = {
}