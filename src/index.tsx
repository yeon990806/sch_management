import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { GlobalStyle } from './style/GlobalStyle'
import BaseLayout from './components/BaseLayout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
)