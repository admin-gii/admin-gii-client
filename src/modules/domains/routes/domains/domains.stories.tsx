import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Domains } from './domains.component';
import '@styles/index.css';

export default {
  title: 'Common/Domains',
  component: Domains,
} as ComponentMeta<typeof Domains>

const Template: ComponentStory<typeof Domains> = (args) => <Domains {...args} />;

export const DomainsInitial = Template.bind({});
DomainsInitial.args = {
}