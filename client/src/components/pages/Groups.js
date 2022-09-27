import React, { useContext } from 'react';
import { ThreePartTemplate } from './pages.styled'
import { Box } from '../utils/Box'
import { SanityContext } from '../../sanityUtils/SanityContext';
import { imageUrlBuilder } from '../../sanity';

export const Groups = () => {

    const undergruppebokser = useContext(SanityContext)
        .filter(document => document._type == "undergruppe")
        .sort((a,b) => {
            if(a.undergruppenavn > b.undergruppenavn){ return 1}
            if(a.undergruppenavn < b.undergruppenavn){ return -1}
            return 0
        })
        .map( e => <Box key={e.id} title={e.undergruppenavn} path={`undergrupper/${e.id}`} thumbnail={imageUrlBuilder.image(e.icon).url()}/>)

    return (
        <ThreePartTemplate textWidth={36}>
            <div className="page-title">
                Undergrupper
            </div>
            <div className="page-text">
                I Broderskabet er det et bredt tilbud av forskjellige undergrupper. Gruppene samler arkitektstudentene på tvers av alle
                trinnene og er en arena for å møte andre medstudenter! Se mer om de forskjellige gruppene på gruppens egen side.
            </div>
            <div className="group-box-container page-content">
                {undergruppebokser}
            </div>
        </ThreePartTemplate>
    );
};