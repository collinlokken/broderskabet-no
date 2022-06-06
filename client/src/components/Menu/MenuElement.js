import React, { useState } from 'react';
import { Sublink } from './Sublink';
import { StyledMenuElement, Button } from './Menu.styled';
import { Link } from 'react-router-dom';

export const MenuElement = (props) => {
    const elements = props.links.slice(1,props.links.length).map(sublink => <Sublink key={sublink.title} link={sublink} setOpen={props.setOpen}/>)
    return(
        <StyledMenuElement toggle={props.sublinksOpened[props.links[0].title]}>
            { props.links.length > 1
            ? <>
                <Button onClick={()=>{
                    props.wasOpened(props.links[0].title);
                }}>
                    { props.links[0].title }
                </Button>
                { elements }
            </>
            : <Button onClick={()=>{
                props.setOpen(false)
                props.wasOpened(props.links[0].title);
            }}>
                <Link to={`/${props.links[0].path}`}>
                    {props.links[0].title}
                </Link>
            </Button>
            } 
        </StyledMenuElement>
    )
}