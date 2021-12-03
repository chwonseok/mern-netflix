import React from 'react';
import Nav from '../../components/Nav';
import Featured from '../../components/Featured';
import List from '../../components/List';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { theme } from '../../components/styles/Theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Nav />
      <Featured type={'영화'} />
      <List />
      <List />
      <List />
    </ThemeProvider>
  );
};

export default Home;
