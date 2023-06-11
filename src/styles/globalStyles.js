import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.primary};
    color: ${colors.primaryLight};
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;