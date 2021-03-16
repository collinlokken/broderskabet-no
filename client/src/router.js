import React from 'react';

import { Home, Student, Kontakt }  from './components';

const routes = {
    "/": () => <Home />,
    "/student": () => <Student />,
    "/kontakt": () => <Kontakt />,
  };

export default routes;