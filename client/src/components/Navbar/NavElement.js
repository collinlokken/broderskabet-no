import React, { useState } from 'react';
import { Sublink } from './Sublink';
import { StyledNavElement } from './NavElement.styled';


export const NavElement = ({links}) => {
    const [toggle, setToggle] = useState(false);
    const nonempty = links ? true : false

    const elements = links.map(sublink => <Sublink key={sublink.title} link={ sublink } />)
    return (
        <StyledNavElement className="nav-link-container" toggle={toggle} nonempty={nonempty} onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)}>    
            <ul className="sub-links">
               { elements }
            </ul> 
        </StyledNavElement>
    );
}