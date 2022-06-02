import styled from "styled-components";

export type SpaceProps = {
  height: string;
}

export const Space = styled.div<SpaceProps>`
  display: flex;
  width: 100%;
  height: ${props => props.height};
`

Space.defaultProps = {
  height: '1rem'
}