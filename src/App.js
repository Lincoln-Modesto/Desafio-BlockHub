import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme/default'

import Login from "./pages/Login/index";
import Register from './pages/Register'
import Home from './pages/Home';

export default function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Home/>
    </ThemeProvider>
     
   
  )
}
