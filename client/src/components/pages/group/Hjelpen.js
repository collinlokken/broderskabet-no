import React from 'react';
import { Forsidebilde } from 'Images';

export const Hjelpen = () => {
    return (
        <>
        <div className="page-title">
            Arkitekthjelpen
        </div>
        <div className="page-text">
            <p>
                Arkitekthjelpen har som mål å formidle arkitektur til folket. Hvis du engasjerer deg i denne undergruppen vil du allerede fra
                førsteklasse ha mulighet til å være med på rådgivninger med privatpersoner reelle prosjekter, det kan være alt fra en garasje
                til et tilbygg. For mer informasjon om arkitekthjelpen og hva de gjør, klikk deg inn på nettsiden deres <a href="https://www.arkitekthjelpen.no/">her</a>
            </p>
            <p>
                Ta gjerne kontakt for spørsmål eller ønsker på <a href="mailto:Post@arkitekthjelpen.no">Post@arkitekthjelpen.no</a>
            </p>
        </div>
        <div className="page-content">
            <img src={Forsidebilde} alt=""/>
        </div>
        </>
    );
}