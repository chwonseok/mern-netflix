import React from 'react';
import Nav from './components/Nav';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/Theme';
import { Reset } from 'styled-reset';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Nav />
      <img
        src="https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        width="100%"
        alt=""
      />
    </ThemeProvider>
  );
};

export default App;
