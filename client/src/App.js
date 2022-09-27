import React, { useState, createContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Route, Routes, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { sanity } from './sanity';
import { Base, Home, Student, Kontakt, About, Groups, Fadderuke, Trondheim, Login, SignIn, Historie, Vedtekter, Collegiet, Undergruppe, TempPage, PageNotFound, Burger, Menu, Navbar, Footer, Arrangementer }  from 'Components';
import Logout from './components/Login/Logout';
import { SanityContext } from './sanityUtils/SanityContext';

function App() {
  
  const [open, setOpen] = useState(false);

  const { data: content } = useQuery('content', () => sanity.fetch(`*`));

  if (!content) {
     return <h1>Loading…</h1>;
  }

  return (
    <SanityContext.Provider value={content}>
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
                <Route path="broderskabet" element={<About/>} />
                <Route path="fadderuke" element={<Fadderuke/>} />
                <Route path="trondheim" element={<Trondheim/>} />
                <Route path="student" element={<Student/>} />
                <Route path="kontakt" element={<Kontakt/>} />
                <Route path="undergrupper" element={<Groups/>} />
                <Route path="login" element={<SignIn/>} />
                <Route path="logout" element={<Logout/>} />
                <Route path="historie" element={<Historie/>} />
                <Route path="vedtekter" element={<Vedtekter/>} />
                <Route path="collegiet" element={<Collegiet/>} />
                <Route path="arrangementer" element={<Arrangementer/>} />
                <Route path="undergrupper/:id" element={<Undergruppe/>} />
                <Route path="*" element={<PageNotFound/>} />
              </Route>
            </Routes>

            <Footer />
          </div>
      </ThemeProvider>
    </SanityContext.Provider>
  );
};

export default App;
