import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme/default';

import Routes from './routes/Routes';
import { Router } from 'react-router-dom';
import history from './pages/history'
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from './context/ProjectContext';

export default function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Router history={history}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Routes />
          </ThemeProvider>
        </Router>
      </ProjectProvider>
    </AuthProvider>
  )
}
