import styled from 'styled-components';

export type FlexContainerProps = {
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | 'nowrap-reverse' | 'initial' | 'inherit';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
  [key: string]: any;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

FlexContainer.defaultProps = {
  justify: 'initial',
  align: 'initial',
  wrap: 'initial',
};
