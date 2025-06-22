import React from 'react'
import { useEffect } from 'react'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { SpeedInsights } from '@vercel/speed-insights/react';
 
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Banner></Banner>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <SpeedInsights />
    </>
  )
}

export default App
