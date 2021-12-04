import React from 'react';
import { Skriftet1, Skriftet2, Skriftet3, Skriftet4 } from 'Images'

export const Tidsskriftet = () => {
    return (
        <>
        <div className="page-title">
            Tidsskriftet A
        </div>
        <div className="page-text">
            <p>
                Tidsskriftet A er et studentdrevet tidsskrift om arkitektur og kunst. Vi er i hovedsak stasjonert i Trondheim og består av foto,
                kunst- og arkitekturstudenter, og gir ut fire trykte utgaver i året av høy kvalitet. Tidsskriftet distribueres til de tre
                arkitektutdanningene i Norge, NTNU, BAS og AHO, og til landskapsarkitekturstudiet ved NMBU. Tidsskriftet A har som mål å engasjere
                og starte diskusjoner hos studenter og andre med interesse for arkitektur og kunst.
            </p>
            <p>
                A har røtter tilbake til 1962, da NTH-studentene Svein Hatløy og Lars Fasting opprettet bladet. Den gang, som nå, var bladet et
                fora for diskusjon rundt faget og fagdannelsen som skjer ved universitetet. Siden den tid har bladet fluktuert mellom eksistens
                og ikke-eksistens, til forrige inkarnasjon forsvant på 1990-tallet.
            </p>
            <p>
                Tidsskriftet A startet som en idé om en blekke eller veggavis for ytring rundt faget, men ettersom mulighetene viste seg, grep
                redaksjonen dem og sluttresultatet er et fullverdig tidsskrift. Tidsskriftet A henter identiteten sin fra det tidligere bladet,
                men fremfor å være A, vil det heller stå på dets skuldre og nå høyere og bredere enn noen gang før.
            </p>
            <p>
                Ønsker du å være med i Tidsskriftet A? Følg med på oppslag om opptak i løpet av høsten, eller ta kontakt med oss på mail.
            </p>
            <p>
                Vi er for tiden på utkikk etter en layoutmedarbeider.
            </p>
            <p>
                Vi kan nås på: <a href="mailto:post@tidsskrifteta.no">post@tidsskrifteta.no</a>
            </p>
            <p>
                For mer informsjon, se våre nettsider: <a href="https://www.tidsskrifteta.no">www.tidsskrifteta.no</a>

            </p>
        </div>
        <div className="page-content">
            <img src={Skriftet1} alt=""/>
            <img src={Skriftet2} alt=""/>
            <img src={Skriftet3} alt=""/>
            <img src={Skriftet4} alt=""/>
        </div>
        </>
    );
}