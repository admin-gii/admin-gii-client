import { ComponentStory, ComponentMeta } from '@storybook/react';
import { {__pascalCaseName__} } from './{__name__}.component';
import '@styles/index.css';

export default {
  title: 'Common/{__pascalCaseName__}',
  component: {__pascalCaseName__},
} as ComponentMeta<typeof {__pascalCaseName__}>

const Template: ComponentStory<typeof {__pascalCaseName__}> = (args) => <{__pascalCaseName__} {...args} />;

export const {__pascalCaseName__}Initial = Template.bind({});
{__pascalCaseName__}Initial.args = {
}