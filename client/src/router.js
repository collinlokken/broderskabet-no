import React from 'react';

import { Base, Home, Student, Kontakt, About, Groups, Fadderuke, Trondheim, Login, Register, Historie, Vedtekter, Collegiet, GroupSwitch, TempPage }  from 'Components';

const routes = {
    "/": () => <Base children={<Home />} />,
    "/fadderuke": () => <Base children={<Fadderuke />} />,
    "/trondheim": () => <Base children={<Trondheim />} />,
    "/student": () => <Base children={<Student />} />,
    "/kontakt": () => <Base children={<Kontakt />} />,
    "/broderskabet": () => <Base children={<About />} />,
    "/undergrupper": () => <Base children={<Groups />} />,
    "/login": () => <Base children={<TempPage />} />, // ---> TODO
    "/registrer": () => <Base children={<TempPage />} />, // ---> TODO
    "/historie": () => <Base children={<Historie />} />,
    "/vedtekter": () => <Base children={<Vedtekter />} />,
    "/collegiet": () => <Base children={<Collegiet />} />,
    "/undergrupper/:id": ({id}) => <Base children={<GroupSwitch id={id} />} />,
  };

export default routes;