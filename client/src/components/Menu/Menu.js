import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { MenuElement } from './MenuElement';
import { links } from '../utils/Links'
import { StyledMenuElement } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({open, setOpen}) => {
  const elements = links.map(sublinks => <MenuElement setOpen={setOpen} links={sublinks.sublinks} key={sublinks.sublinks[0].title} />)
  return (
    <StyledMenu open={open}>
      <StyledMenuElement>
        <Link className="menu-element" to="/" onClick={() => setOpen(false)}>
          Hjem
        </Link>
      </StyledMenuElement>
      { elements }
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export { Menu }