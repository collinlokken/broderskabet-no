import React, {useState} from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { MenuElement } from './MenuElement';
import { links } from '../utils/Links'

const Menu = ({open, setOpen}) => {
  
  const [sublinksOpened, setSublinksOpened] = useState()
  
  const openTitle = title =>{
    let dict = {}
    links.forEach(sublinks => sublinks.sublinks[0].title == title ? dict[sublinks.sublinks[0].title]=true : dict[sublinks.sublinks[0].title]=false);
    setSublinksOpened(dict)
  }

  const handleWasOpened = title => {
    if(!sublinksOpened[title]){
      openTitle(title)
    } else {
      openTitle();
    }
  };

  if (!sublinksOpened){
    openTitle(); // opens all titles
  }

  const elements = links.map(sublinks => <MenuElement setOpen={setOpen} links={sublinks.sublinks} wasOpened={handleWasOpened} sublinksOpened={sublinksOpened} key={sublinks.sublinks[0].title}/>)
  return (
    <StyledMenu open={open}>
      { elements }
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export { Menu }