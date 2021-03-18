import React from 'react';

import { Home, Student, Kontakt, About, Groups }  from './components';

const routes = {
    "/": () => <Home />,
    "/student": () => <Student />,
    "/kontakt": () => <Kontakt />,
    "/broderskabet": () => <About />,
    "/undergrupper": () => <Groups />,
  };

export default routes;