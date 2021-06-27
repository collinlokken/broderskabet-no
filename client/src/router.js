import React from 'react';

import { Home, Student, Kontakt, About, Groups, Fadderuke, Trondheim, Login, Register }  from './components';

const routes = {
    "/": () => <Home />,
    "/fadderuke": () => <Fadderuke />,
    "/trondheim": () => <Trondheim />,
    "/student": () => <Student />,
    "/kontakt": () => <Kontakt />,
    "/broderskabet": () => <About />,
    "/undergrupper": () => <Groups />,
    "/login": () => <Login />,
    "/register": () => <Register />,
  };

export default routes;