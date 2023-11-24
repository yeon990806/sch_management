import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    font-family: 'Pretendard', sans-serif;

    background: ${props => props.theme.style.background};

    section {
      padding: 16px;
    }
  }
`;