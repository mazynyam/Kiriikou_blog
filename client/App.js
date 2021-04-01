import React from 'react'
import MainRouter from './MainRouter'
import Header from './core/Menu'
import Footer from './core/Footer'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'
import './App.css'
// import './scss/style.scss'
import './components/chatbutton.css'
import './components/infobar.css'
import './components/Message.css'
import './components/ChatLogin.css'
import Signin from './auth/Signin'


const App = (props) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  
  // if(!localStorage.getItem('jwt')) return <Signin />
  return (
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
          <MainRouter />
      </ThemeProvider>
  </BrowserRouter>
)}

export default hot(module)(App)
