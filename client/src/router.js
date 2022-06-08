import React from 'react';

import { Base, Home, Student, Kontakt, About, Groups, Fadderuke, Trondheim, Login, SignIn, Historie, Vedtekter, Collegiet, GroupSwitch, TempPage, Arrangementer }  from 'Components';

const routes = {
    "/": () => <Base children={<Home />} />,
    "/fadderuke": () => <Base children={<Student />} />,
    "/trondheim": () => <Base children={<Trondheim />} />,
    "/student": () => <Base children={<Student />} />,
    "/kontakt": () => <Base children={<Kontakt />} />,
    "/broderskabet": () => <Base children={<About />} />,
    "/undergrupper": () => <Base children={<Groups />} />,
    "/login": () => <Base children={<TempPage />} />, // ---> TODO
    "/registrer": () => <Base children={<SignIn />} />, // ---> TODO
    "/historie": () => <Base children={<Historie />} />,
    "/vedtekter": () => <Base children={<Vedtekter />} />,
    "/collegiet": () => <Base children={<Collegiet />} />,
    "/undergrupper/:id": ({id}) => <Base children={<GroupSwitch id={id} />} />,
    "/arrangementer": () => <Base children={<Arrangementer />} />,

  };

export default routes;