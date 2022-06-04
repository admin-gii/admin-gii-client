import styled from 'styled-components';

export type FlexContainerProps = {
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | 'nowrap-reverse' | 'initial' | 'inherit';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
  gap?: string;
  [key: string]: any;
}

export type FlexItemProps = {
  col: number | string;
  [key: string]: any;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  width: 100%;
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  gap: ${props => props.gap};
`;

export const FlexItem = styled.div<FlexItemProps>`
  flex-basis: calc(100% / ${props => props.col});
  max-width: calc(100% / ${props => props.col});
`;

FlexContainer.defaultProps = {
  justify: 'initial',
  align: 'initial',
  wrap: 'initial',
};
