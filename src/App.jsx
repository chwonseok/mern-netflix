import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/Theme.js';
import { Reset } from 'styled-reset';
// import Home from './pages/home/Home';
// import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Register />
    </ThemeProvider>
  );
};

export default App;
