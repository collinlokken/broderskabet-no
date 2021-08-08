import React from 'react';
import { ThreePartTemplate } from './pages.styled'
import Program from '../../img/fadderuka/program.jpg'
import ProgramMobile from '/client/src/img/fadderuka/program-mobile.jpg'
import useWindowSize from '/client/src/components/hooks/useWindowSize';
import Pakkeliste from '/client/src/img/fadderuka/pakkeliste.jpg'
import Fadderbarn from '/client/src/img/fadderuka/fadderbarn.jpg'

export const Fadderuke = () => {
    const windowSize = useWindowSize()
    const image = windowSize.width < 1000 ? ProgramMobile : Program;
    return (
        <ThreePartTemplate >
            <div className="page-title">
                Fadderukene 2021
            </div>
            <div className="page-content">
                <img src={image}/>
                <img src={Pakkeliste}/>
                <img src={Fadderbarn}/>
            </div>
        </ThreePartTemplate>
    );
};
