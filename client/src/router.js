import React from 'react';

import { Home, Student, Kontakt, About, Groups, Fadderuke, Trondheim }  from './components';

const routes = {
    "/": () => <Home />,
    "/fadderuke": () => <Fadderuke />,
    "/trondheim": () => <Trondheim />,
    "/student": () => <Student />,
    "/kontakt": () => <Kontakt />,
    "/broderskabet": () => <About />,
    "/undergrupper": () => <Groups />,
  };

export default routes;