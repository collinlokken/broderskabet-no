import React from 'react';
import { ThreePartTemplate } from './pages.styled'
import { Forsidebilde } from 'Images'


export const Student = () => {
    return (
        <ThreePartTemplate textWidth={40}>
            <div className="page-title">
                Tips til nye studenter
            </div>
            <div className="page-text">
                <ol>
                    <li>
                        <b>Mazemap</b><br/>
                        Last ned appen Mazemap for å navigere på campus! Da er det bare å skrive inn romnummeret der du skal og appen finner veien for deg. Veldig praktisk de første dagene når man skal bli kjent, og til og med senere i studieløpet! 
                    </li><br/>
                    <li>
                        <b>Kjøp brukt</b><br/>
                        Å studere arkitektur kan koste. Da kan det lønne seg å kjøpe både bøker og tegne- og modellutstyr brukt. Se på Finn, iBok, eller spør fadderne dine om de skal selge sine bøker. Som oftest dukker dette opp i førsteklasse sin FaceBook-gruppe også, men det gjelder å være rask for ting blir fort solgt! 
                    </li><br/>
                    <li>
                        <b>Engasjer deg</b><br/>
                        Mange studenter i Trondheim engasjerer seg i form av forskjellige verv eller idretter. Man kan stille til verv i linjeforeningen, i forskjellige undergrupper, på Samfundet og andre steder. Man kan også bli med i NTNUI som er studentenes idrettslag, her finner man et bredt utvalg idretter som tar i mot både erfarne og nybegynnere. Dette er en fin plattform for å møte flere venner! 
                    </li><br/>
                    <li>
                        <b>Ikke vær redd for å spørre </b><br/>
                        I den første tiden er det mange nye inntrykk og forskjellige ting å forholde seg til, så ikke vær redd for å spørre hvis det er noe du er usikker på!
                    </li><br/>
                    <li>
                        <b>Husk å ta pause</b><br/>
                        Som arkitektstudent er det veldig lett å bli oppslukt i det man jobber med, men husk å ta deg regelmessige og gode pauser innimellom. Man kan gå en liten tur rundt campus, ta en kaffe i kantinen med medstudenter, eller spille ping pong på Stripa. 
                    </li><br/>
                    <li>
                        <b>Ikke ta skolen for alvorlig, spesielt første semester!</b><br/>
                        Som ny student er det lett å ta skolen litt for alvorlig. Husk at første semester er bygget opp for at du skal utforske og ha det gøy, samtidig som man blir kjent med hvordan det er å studere arkitektur. Det er ikke alltid nødvendig å sitte med skolearbeid til langt utpå kvelden, dra heller og gjør noe du synes er kjekt! 
                    </li><br/>
                    <li>
                        <b>Dokumenter det du lager</b><br/>
                        Det siste tipset er å dokumentere det du lager helt fra starten av. Scan både skisser og ferdige tegninger, og ta bilde av alle modellene dine! Dette gir kanskje ikke mening i begynnelsen, men når man kommer litt lenger ut i løpet er det fint å kunne se tilbake på tidligere arbeid. Man får også bygget opp en verdifull portefølje som vil bli nyttig i fremtiden.
                    </li><br/>
                </ol>
            </div>
            <div className="page-content">
                <img src={Forsidebilde} alt=""/>
            </div>
        </ThreePartTemplate>
    );
};