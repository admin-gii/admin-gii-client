import { SvgIcon, SvgIconProps } from "./svg-icon.component";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SVGProps } from "./svg-icon.styles";
import '@styles/index.css';

export default {
  title: 'Common/Icons',
  component: SvgIcon,
} as ComponentMeta<typeof SvgIcon>

const Template: ComponentStory<typeof SvgIcon> = (args: SvgIconProps & SVGProps) => <SvgIcon {...args} />;

export const AllIcons = Template.bind({});
AllIcons.args = {
  iconName: 'badge-icon',
  iconColor: '#000000',
}