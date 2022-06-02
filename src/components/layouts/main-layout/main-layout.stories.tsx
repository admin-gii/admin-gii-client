import { Loading } from '@components/loading';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from './main-layout.component';
import '@styles/index.css';

export default {
  title: 'Layouts/Main Layout',
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof MainLayout>

const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const MainLayoutText = Template.bind({});
MainLayoutText.args = {
  children: 'Hello World'
}

export const MainLayoutLoading: ComponentStory<typeof MainLayout> = () => <MainLayout><Loading /></MainLayout>