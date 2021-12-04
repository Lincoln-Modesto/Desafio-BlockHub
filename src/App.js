import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme/default';

import Routes from './Routes';
import { Router } from 'react-router-dom';
import history from './pages/history'
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
   <AuthProvider>
      <Router history={history}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Router>
   </AuthProvider>
  )
}
