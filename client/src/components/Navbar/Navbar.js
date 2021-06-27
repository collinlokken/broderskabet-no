import React from 'react';
import { A } from 'hookrouter';
import { StyledNavbar, Logo } from './Navbar.styled';
//import { bool, func } from 'prop-types';

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <A href='/'>
            <div className="logo-container">
                <Logo />
                <div className="logo-title"><span>Arkitektstudentenes</span> <span>Broderskab</span></div>
            </div>
        </A>
      </div>
      <div className="nav-link-container">
        <A href='/student'>
            Student
        </A>
      </div>
      <div className="nav-link-container">
        <A href='/broderskabet'>
            Broderskabet
        </A>
      </div>
      <div className="nav-link-container">
        <A href='/kontakt'>
            Kontakt
        </A>
      </div>
      <div className="nav-link-container">
        <A href='/login'>
            Login
        </A>
      </div>
      <div className="nav-link-container">
        <A href='/register'>
            Registrer
        </A>
      </div>
    </StyledNavbar>
  )
}
/*Navbar.propTypes = {

}*/

export { Navbar }