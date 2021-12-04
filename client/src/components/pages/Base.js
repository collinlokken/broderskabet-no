import React from 'react';
import { StyledPage, Sponsors } from './pages.styled'
import { Sponsorer } from 'Images'
import { Outlet } from "react-router-dom";

export const Base = (props) => {

    return (
        <StyledPage>
            <Outlet />
            <Sponsors>
                <img src={Sponsorer} alt="sponsor line"/>
            </Sponsors>
        </StyledPage>
    );
};