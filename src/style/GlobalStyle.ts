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

    #root {
      height: 100%;
    }

    section {
      height: 100%;
      padding: 16px;
    }
  }
`;