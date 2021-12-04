import React from 'react';
import { StyledPage, Sponsors } from './pages.styled'
import { Sponsorer } from 'Images'
import { useParams } from "react-router-dom";

let { location } = useParams();

export const Base = (props) => {
    let { location } = useParams();
    return (
        <StyledPage>
            { props.children }
            <Sponsors>
                <img src={Sponsorer} alt="sponsor line"/>
            </Sponsors>
        </StyledPage>
    );
};