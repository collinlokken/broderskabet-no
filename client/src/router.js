import React from 'react';

import Home from './components/Home';
import Student from './components/Student';

const routes = {
    "/home": () => <Home />,
    "/student": () => <Student /> 
  };

export default routes;