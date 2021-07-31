import React, { useState } from 'react';
import { Sublink } from './Sublink';
import { A } from 'hookrouter';
import { StyledMenuElement, Button } from './Menu.styled';

export const MenuElement = (props) => {
    const [toggle, setToggle] = useState(false)
    const elements = props.links.slice(1,props.links.length).map(sublink => <Sublink key={sublink.title} link={sublink} setOpen={props.setOpen}/>)
    return(
        <StyledMenuElement toggle={toggle}>
            <Button onClick={()=>setToggle(!toggle)}>
                { props.links[0].title }
            </Button>
            { elements } 
        </StyledMenuElement>
    )
}