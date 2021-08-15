import React from 'react';
import { Choret1, Choret2, Choret3, Choret4 } from 'Images';

export const Choret = () => {
    return (
        <>
        <div className="page-title">
            Hoeychoret
        </div>
        <div className="page-text">
            <p>
                Det Arkitektoniske Hoeychoret er Broderskabets egne blandetkor. Her er alle velkomne til å synge både gamle ærbødige Broderskabssanger, og litt mer kjente sanger. Enten du er erfaren korist eller bare synes det er spennende å prøve nye ting, så er dette noe for deg!
            </p>
            <p> 
                I løpet av året deltar gruppen med musikalske innslag på ulike arrangementer i regi av Broderskabet, blant annet immatrikuleringsballet. De arrangerer også to konserter i løpet av året, en julekonsert og en vårkonsert. Det er mange studentkor i Trondheim, og Korstock er en årlig samling av disse korene som koret ofte er med på, og annenhvert år har er det Sjungom. 
            </p>
            <p>
                Hoeychoret tar i mot alle med åpne armer og inviterer med et kakestykke eller to på hver øving.
            </p>
        </div>
        <div className="page-content">
            <img src={Choret1} alt=""/>
            <img src={Choret2} alt=""/>
            <img src={Choret3} alt=""/>
            <img src={Choret4} alt=""/>
        </div>
        </>
    );
}