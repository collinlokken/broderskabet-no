import React from 'react';
import { StyledPage, Sponsors } from './pages.styled'
import { Sponsorer } from 'Images'


export const Base = (props) => {
    return (
        <StyledPage>
            { props.children }
            <Sponsors>
                <img src={Sponsorer} alt="sponsor line"/>
            </Sponsors>
        </StyledPage>
    );
};