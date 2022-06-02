import React, { FC } from 'react';

import { SVG, SVGProps } from './svg-icon.styles';
import sprite from './sprite.svg';

export type SvgIconProps = {
  iconName: 'badge-icon' | 'exit-icon' | 'home-icon' | 'megaphone-icon' | 'mini_badge-icon' | 'react-icon' | 'notch-icon' | 'settings-icon' | 'star-icon' | 'tab-icon' | 'tag-icon' | 'fireworks-icon' | 'search-icon' | 'bell-icon' | 'bin-icon' | 'calendar-icon';
  [key: string]: any;
}

export const SvgIcon: FC<SvgIconProps & SVGProps> = ({ iconName, ...rest }) => {
  return (
    <SVG {...rest}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </SVG>
  );
};
