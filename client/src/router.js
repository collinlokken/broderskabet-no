import React from 'react';

import { Base, Home, Student, Kontakt, About, Groups, Fadderuke, Trondheim, Login, Register, Historie, Vedtekter }  from './components';

const routes = {
    "/": () => <Base children={<Home />} />,
    "/fadderuke": () => <Base children={<Fadderuke />} />,
    "/trondheim": () => <Base children={<Trondheim />} />,
    "/student": () => <Base children={<Student />} />,
    "/kontakt": () => <Base children={<Kontakt />} />,
    "/broderskabet": () => <Base children={<About />} />,
    "/undergrupper": () => <Base children={<Groups />} />,
    "/login": () => <Base children={<Login />} />,
    "/registrer": () => <Base children={<Register />} />,
    "/historie": () => <Base children={<Historie />} />,
    "/vedtekter": () => <Base children={<Vedtekter />} />,
  };

export default routes;