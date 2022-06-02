import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Error } from './error.component';
import '@styles/index.css';

export default {
  title: 'Common/Error',
  component: Error,
} as ComponentMeta<typeof Error>

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const ErrorInitial = Template.bind({});
ErrorInitial.args = {
}