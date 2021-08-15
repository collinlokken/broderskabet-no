import React from 'react';
import { Connect1, Connect2, Connect3, Connect4, Connect5 } from 'Images'

export const Connect = () => {
    return (
        <>
        <div className="page-title">
            Connect
        </div>
        <div className="page-text">
            <p>
                Connect er Broderskabets profileringsgruppe, og arbeider for å skaffe linjeforeningens nye sponsorer, bedriftspresentasjoner,
                omvisninger på arkitektkontorer og mye mer. Det er denne gruppen som sørger for at Broderskabet har råd til å finne på masse
                gøy, og samtidig setter studentene i kontakt med næringslivet og arkitekturbransjen. Et typisk år for Connect består av å holde
                “bedpress”, holde dialog med sponsorer, og å forhandle og reforhandle kontrakter samnt skaffe de relevante faglige impulsene
                som studentene ønsker seg utenfra.
            </p>
            <p> 
                <a href="/collegiet#Troldquinde">Lederen</a> til Connect sitter i Collegiet og velges inn ved generalforsamlingen, mens øvrige stilligner vil bli lyst ut i
                løpet av høsten. Bli med da vel!
            </p>
        </div>
        <div className="page-content">
            <img src={Connect1} alt=""/>
            <img src={Connect2} alt=""/>
            <img src={Connect3} alt=""/>
            <img src={Connect4} alt=""/>
            <img src={Connect5} alt=""/>
        </div>
        </>
    );
}