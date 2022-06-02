import { FlexContainer } from '@styles/flex-container';
import styled from 'styled-components';

export const AuthLayoutContainer = styled(FlexContainer)`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
`
