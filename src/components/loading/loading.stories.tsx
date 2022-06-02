import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loading } from './loading.component';
import '@styles/index.css';

export default {
  title: 'Common/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const LoadingGlobal = Template.bind({});
LoadingGlobal.args = {
}