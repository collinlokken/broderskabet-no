import React from 'react';
import { A } from 'hookrouter';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <A href="/home" onClick={() => setOpen(false)}>
        <span role="img" aria-label="Hjem">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Hjem
      </A>
      <A href="/student" onClick={() => setOpen(false)}>
        <span role="img" aria-label="Student">&#x1f4b8;</span>
        Student
        </A>
      <A href="/" onClick={() => setOpen(false)}>
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