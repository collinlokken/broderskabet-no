import React from 'react';
import { A } from 'hookrouter';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { MenuElement } from './MenuElement';
import { links } from '../utils/Links'
import { StyledMenuElement } from './Menu.styled';




const Menu = ({open, setOpen}) => {
  const elements = links.map(sublinks => <MenuElement setOpen={setOpen} links={sublinks.sublinks} key={sublinks.sublinks[0].title} />)
  return (
    <StyledMenu open={open}>
      <StyledMenuElement>
        <A className="menu-element" href="/" onClick={() => setOpen(false)}>
          Hjem
        </A>
      </StyledMenuElement>
      { elements }
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export { Menu }