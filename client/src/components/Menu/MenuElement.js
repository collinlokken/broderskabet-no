import React, { useState } from 'react';
import { Sublink } from './Sublink';
import { StyledMenuElement, Button } from './Menu.styled';
import { Link } from 'react-router-dom';

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
                <Link to={`/${props.links[0].path}`}>
                    {props.links[0].title}
                </Link>
            </Button>
            } 
        </StyledMenuElement>
    )
}