import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Roles } from './roles.component';
import '@styles/index.css';

export default {
  title: 'Common/Roles',
  component: Roles,
} as ComponentMeta<typeof Roles>

const Template: ComponentStory<typeof Roles> = (args) => <Roles {...args} />;

export const RolesInitial = Template.bind({});
RolesInitial.args = {
}