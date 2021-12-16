import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/Theme.js';
import { Reset } from 'styled-reset';
import Login from './pages/login/Login.jsx';
// import Home from './pages/home/Home';
// import Watch from './pages/watch/Watch';
// import Register from './pages/register/Register';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Login />
    </ThemeProvider>
  );
};

export default App;
