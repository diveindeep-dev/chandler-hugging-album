import { createGlobalStyle } from 'styled-components';
import './Fonts.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'GmarketSansMedium',
    'Noto Sans KR', Sans-serif;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  input {
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
