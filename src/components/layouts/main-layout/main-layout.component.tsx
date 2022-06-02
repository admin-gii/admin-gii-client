import React, { FC } from 'react';
import { Header } from './header';
import { LeftSidebar } from './left-sidebar';
import { MainLayoutContainer, MainLayoutFluidContent, MainLayoutLeftSidebar } from './main-layout.styles';

const MainLayout: FC = ({ children }) => {
  return (
    <MainLayoutContainer className='bp3-dark'>
      <Header />
      <MainLayoutLeftSidebar>
        <LeftSidebar />
      </MainLayoutLeftSidebar>
      <MainLayoutFluidContent>
        {children}
      </MainLayoutFluidContent>
    </MainLayoutContainer>
  );
};

export { MainLayout };
