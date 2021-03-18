import React from 'react';
import { A } from 'hookrouter';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <A href="/" onClick={() => setOpen(false)}>
        <span role="img" aria-label="Hjem">&#x1F3E0;</span>
        Hjem
      </A>
      <A href="/student" onClick={() => setOpen(false)}>
        <span role="img" aria-label="Student">&#x1F393;</span>
        Student
      </A>
      <A href="/broderskabet" onClick={() => setOpen(false)}>
        <span role="img" aria-label="Broderskabet">&#x1F64B;&#127997;</span>
        Broderskabet
      </A>
      <A href="/undergrupper" onClick={() => setOpen(false)}>
        <span role="img" aria-label="Undergrupper">&#x1F46F;</span>
        Undergrupper
      </A>
      <A href="/kontakt" onClick={() => setOpen(false)}>
        <span role="img" aria-label="Kontakt">&#x1f4e9;</span>
        Kontakt
      </A>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export { Menu }