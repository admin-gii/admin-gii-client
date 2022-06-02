import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  background-color: ${props => props.theme.colors.white};

  .bp4-navbar-heading {
    width: calc(${props => props.theme.sidebarWidth} - 30px);
  }
`;

export const MainLayoutLeftSidebar = styled.div`
  position: fixed;
  top: 50px;
  bottom: 0;
  width: ${props => props.theme.sidebarWidth};
  background-color: ${props => props.theme.colors.white};
  border-right: 1px solid ${props => props.theme.colors.border};

  .bp4-menu {
    a {
      color: #1c2127;
      text-decoration: none;
    }
  }
`;

export const MainLayoutFluidContent = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: ${props => props.theme.sidebarWidth};
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  min-height: calc(100vh - 50px);
`;
