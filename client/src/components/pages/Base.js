import React from 'react';
import { StyledPage, Sponsors } from './pages.styled'
import sponsor from '../../img/sponsorer.png'


export const Base = (props) => {
    return (
        <StyledPage>
            { props.children }
            <Sponsors>
                <img src={sponsor} alt="sponsor line"/>
            </Sponsors>
        </StyledPage>
    );
};