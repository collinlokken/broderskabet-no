import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Route, Routes, Link } from 'react-router-dom';

import { Base, Home, Student, Kontakt, About, Groups, Fadderuke, Trondheim, Login, SignIn, Historie, Vedtekter, Collegiet, GroupSwitch, TempPage, PageNotFound, Burger, Menu, Navbar, Footer, Arrangementer }  from 'Components';
import Logout from './components/Login/Logout';

function App() {
  
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Navbar />
          <div className="burger-menu">
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          {/* React router v6*/}
          <Routes>
            <Route path="/" element={<Base/>} >
              <Route index element={<Home/>} />
              <Route path="fadderuke" element={<Fadderuke/>} />
              <Route path="trondheim" element={<Trondheim/>} />
              <Route path="student" element={<Student/>} />
              <Route path="kontakt" element={<Kontakt/>} />
              {/*<Route path="broderskabet" element={<About/>} />*/}
              <Route path="undergrupper" element={<Groups/>} />
              <Route path="login" element={<TempPage/>} />
              <Route path="registrer" element={<SignIn/>} />
              <Route path="logut" element={<Logout/>} />
              <Route path="historie" element={<Historie/>} />
              <Route path="vedtekter" element={<Vedtekter/>} />
              <Route path="collegiet" element={<Collegiet/>} />
              <Route path="arrangementer" element={<Arrangementer/>} />
              <Route path="undergrupper/:id" element={<GroupSwitch/>} />
              <Route path="*" element={<PageNotFound/>} />
            </Route>
          </Routes>

          <Footer />
        </div>
    </ThemeProvider>
  );
};

export default App;
