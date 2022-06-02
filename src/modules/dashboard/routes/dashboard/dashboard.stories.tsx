import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dashboard } from './dashboard.component';
import '@styles/index.css';

export default {
  title: 'Common/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = (args) => <Dashboard {...args} />;

export const DashboardInitial = Template.bind({});
DashboardInitial.args = {
}