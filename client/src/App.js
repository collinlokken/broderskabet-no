import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Route, Routes, Link } from 'react-router-dom';

import { Home, Student, Kontakt, About, Groups, Fadderuke, Trondheim, Login, Register, Historie, Vedtekter, Collegiet, GroupSwitch, TempPage, PageNotFound, Burger, Menu, Navbar, Footer }  from 'Components';


function App() {
  
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
        <HashRouter>

          <Navbar />
          <div className="burger-menu">
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <StyledPage>
            <Routes>
              <Route path="/" component={<Home/>} />
              <Route path="/fadderuke" component={<Fadderuke/>} />
              <Route path="/trondheim" component={<Trondheim/>} />
              <Route path="/student" component={<Student/>} />
              <Route path="/kontakt" component={<Kontakt/>} />
              <Route path="/broderskabet" component={<About/>} />
              <Route path="/undergrupper" component={<Groups/>} />
              <Route path="/login" component={<TempPage/>} />
              <Route path="/registrer" component={<TempPage/>} />
              <Route path="/historie" component={<Historie/>} />
              <Route path="/vedtekter" component={<Vedtekter/>} />
              <Route path="/collegiet" component={<Collegiet/>} />
              <Route path="/undergrupper/:id" component={<GroupSwitch/>} />
              <Route component={<PageNotFound/>} />
            </Routes>
            <Sponsors>
              <img src={Sponsorer} alt="sponsor line"/>
            </Sponsors>
          </StyledPage>

          <Footer />
        </HashRouter>
        </div>
    </ThemeProvider>
  );
};

export default App;
