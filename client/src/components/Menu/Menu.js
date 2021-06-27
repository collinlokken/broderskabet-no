import React, { useState } from 'react';
import { A } from 'hookrouter';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    background: ${({ theme }) => theme.primaryLight};s
    text-decoration: none;
    transition: color 0.3s linear;
`;

const Menu = ({open, setOpen}) => {
  const [toggle, setToggle] = useState(false)
  return (
    <StyledMenu open={open} toggle={toggle}>
      <div className="menu-element user-container">
        <A href="/register" onClick={() => setOpen(false)}>
          Register
        </A>
        <A href="/login" onClick={() => setOpen(false)}>
          Login
        </A>
      </div>
      <A className="menu-element" href="/" onClick={() => setOpen(false)}>
        Hjem
      </A>
      <Button className="menu-element" onClick={()=>setToggle(!toggle)}>
          Student
      </Button>
      <div className="sub-link-container">
        <A className="sub-link" href="/fadderuke" onClick={() => setOpen(false)}>
          Fadderukene
        </A>
        <A className="sub-link" href="/trondheim" onClick={() => setOpen(false)}>
          Byen og Gløs
        </A>
        <A className="sub-link" href="/student" onClick={() => setOpen(false)}>
          Livet som student
        </A>
      </div>
      <A className="menu-element" href="/broderskabet" onClick={() => setOpen(false)}>
        Broderskabet
      </A>
      <A className="menu-element" href="/undergrupper" onClick={() => setOpen(false)}>
        Undergrupper
      </A>
      <A className="menu-element" href="/kontakt" onClick={() => setOpen(false)}>
        Kontakt
      </A>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export { Menu }