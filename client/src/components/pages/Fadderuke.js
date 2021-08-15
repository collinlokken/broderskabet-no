import React from 'react';
import { ThreePartTemplate } from './pages.styled'
import { Program, ProgramMobile, Pakkeliste, Fadderbarn} from 'Images'
import useWindowSize from '../hooks/useWindowSize';

export const Fadderuke = () => {
    const windowSize = useWindowSize()
    const image = windowSize.width < 1000 ? ProgramMobile : Program;
    return (
        <ThreePartTemplate >
            <div className="page-title">
                Fadderukene 2021
            </div>
            <div className="page-content">
                <img src={image} alt="program"/>
                <img src={Pakkeliste} alt="pakkeliste"/>
                <img src={Fadderbarn} alt="fadderbarn"/>
            </div>
        </ThreePartTemplate>
    );
};
