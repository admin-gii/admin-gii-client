import { createGlobalStyle } from 'styled-components';

// IMPORT FONTS
import ManropeExtraLight from '@assets/fonts/Manrope-ExtraLight.ttf';
import ManropeLight from '@assets/fonts/Manrope-Light.ttf';
import Manrope from '@assets/fonts/Manrope-Regular.ttf';
import ManropeMedium from '@assets/fonts/Manrope-Medium.ttf';
import ManropeSemiBold from '@assets/fonts/Manrope-SemiBold.ttf';
import ManropeBold from '@assets/fonts/Manrope-Bold.ttf';
import ManropeExtraBold from '@assets/fonts/Manrope-ExtraBold.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'ManropeExtraLight';
    src: url(${ManropeExtraLight}) format('truetype');
    font-weight: 200;
  }
  
  @font-face {
    font-family: 'ManropeLight';
    src: url(${ManropeLight}) format('truetype');
    font-weight: 300;
  }
  
  @font-face {
    font-family: 'Manrope';
    src: url(${Manrope}) format('truetype');
    font-weight: 400;
  }
  
  @font-face {
    font-family: 'ManropeMedium';
    src: local('ManropeMedium'),
      url(${ManropeMedium}) format('truetype');
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'ManropeSemiBold';
    src: url(${ManropeSemiBold}) format('truetype');
    font-weight: 600;
  }
  
  @font-face {
    font-family: 'ManropeBold';
    src: url(${ManropeBold}) format('truetype');
    font-weight: 700;
  }
  
  @font-face {
    font-family: 'ManropeExtraBold';
    src: url(${ManropeExtraBold}) format('truetype');
    font-weight: 800;
  }

  body {
    background-color: rgb(30, 32, 33);
  }
`;
