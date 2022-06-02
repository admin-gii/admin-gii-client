import styled from 'styled-components';

export type SVGProps = {
  size?: string;
  iconColor?: string;
  $stroke?: boolean;
}

export const SVG = styled.svg<SVGProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  fill: ${props => props.iconColor || props.theme.colors.black};
  stroke: ${props =>
    props.$stroke
      ? props.iconColor
        ? props.iconColor
        : props.theme.colors.black
      : 'none'};
  transition-duration: 200ms;

  &[disabled] {
    opacity: 0.2;
  }
`;

SVG.defaultProps = {
  size: '2rem',
}
