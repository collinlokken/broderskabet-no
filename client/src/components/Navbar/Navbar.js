import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar, Logo } from './Navbar.styled';
import { NavElement } from './NavElement';
import { links } from '../utils/Links'
//import { bool, func } from 'prop-types';

const Navbar = () => {
  
  const elements = links.map(sublinks => <NavElement key={sublinks.sublinks[0].title} links={sublinks.sublinks}/>).slice(1)
  return (
    <StyledNavbar>
      <div className="logo-nav-element">
        <Link to='/'>
            <div className="logo-container">
                <Logo />
                <div className="logo-title"><span>Arkitektstudentenes</span> <span>Broderskab</span></div>
            </div>
        </Link>
      </div>
      { elements }
    </StyledNavbar>
  )
}

export { Navbar }