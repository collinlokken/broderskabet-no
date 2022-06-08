import React, { useState, useEffect } from 'react';
import { Sublink } from './Sublink';
import { StyledNavElement } from './NavElement.styled';


export const NavElement = ({links}) => {
    //const [toggle, setToggle] = useState({});
    //const [titles, setTitles] = useState([]);
    const [toggleGroup, setToggleGroup] = useState(false);

    const handleHover = (bool, title) => { 
        // this works in a strange way... 
        // the childs should report to parent <NavElement> if mouse enter or left via callback 'handleHover'
        // but mouseLeave only manages to update state when mouse leaves the entire group of children,
        // however it should fire every time it leaves single child i.e. <Sublink/>
        // but this is strangely the behaviour we want... ah well!

        /*let newDict = JSON.parse(JSON.stringify(toggle))
        newDict[title] = bool;
        setToggle(newDict);
        if(!titles.includes(title)){
            setTitles([...titles, title])
        }*/
        setToggleGroup(bool)
    }

    const elements = links.map(
        sublink => <Sublink key={sublink.title} link={ sublink } callback={handleHover}/>
    );
    
    /*useEffect(() => {
        let childList = []
        titles.forEach(title => {
            childList.push(toggle[title])
        })
        if(childList.length==0){
            childList.push(false);
        }
        console.log(childList+ " -> " + !childList.includes(false)) // vote: checks if one of the children votes false, then parent should close
        setToggleGroup(!childList.includes(false))
    },[toggle])

    useEffect(() => {
        console.log(toggleGroup)
    },[toggleGroup])
    */
    return (
        <StyledNavElement
            toggle={toggleGroup}
        >  
            { elements }
        </StyledNavElement>
    );
}