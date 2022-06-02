import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Settings } from './settings.component';
import '@styles/index.css';

export default {
  title: 'Common/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>

const Template: ComponentStory<typeof Settings> = (args) => <Settings {...args} />;

export const SettingsInitial = Template.bind({});
SettingsInitial.args = {
}