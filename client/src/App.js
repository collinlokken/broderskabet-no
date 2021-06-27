import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useRoutes } from 'hookrouter';
import routes from './router';

import { Burger, Menu, Navbar } from './components';


function App() {
  const routeResult = useRoutes(routes);
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <div className="nav-bar">
            <Navbar />
          </div>
          <div className="burger-menu">
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          
          {routeResult}
      </div>
    </ThemeProvider>
  );
};

export default App;
