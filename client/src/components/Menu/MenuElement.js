import React, { useState } from 'react';
import { Sublink } from './Sublink';
import { StyledMenuElement, Button } from './Menu.styled';
import { A } from 'hookrouter';

export const MenuElement = (props) => {
    const [toggle, setToggle] = useState(false)
    const elements = props.links.slice(1,props.links.length).map(sublink => <Sublink key={sublink.title} link={sublink} setOpen={props.setOpen}/>)
    return(
        <StyledMenuElement toggle={toggle}>
            { props.links.length > 1
            ? <>
                <Button onClick={()=>setToggle(!toggle)}>
                    { props.links[0].title }
                </Button>
                { elements }
            </>
            : <Button onClick={()=>props.setOpen(false)}>
                <A href={`/${props.links[0].path}`}>
                    {props.links[0].title}
                </A>
            </Button>
            } 
        </StyledMenuElement>
    )
}