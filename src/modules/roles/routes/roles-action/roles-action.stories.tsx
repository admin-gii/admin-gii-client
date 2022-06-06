import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RolesAction } from './roles-action.component';
import '@styles/index.css';

export default {
  title: 'Common/RolesAction',
  component: RolesAction,
} as ComponentMeta<typeof RolesAction>

const Template: ComponentStory<typeof RolesAction> = (args) => <RolesAction {...args} />;

export const RolesActionInitial = Template.bind({});
RolesActionInitial.args = {
}