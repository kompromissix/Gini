import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main/>
    <Footer/>
  </StrictMode>,
)
