import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from './form.component';
import '@styles/index.css';

export default {
  title: 'Common/Form',
  component: Form,
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const FormInitial = Template.bind({});
FormInitial.args = {
}