import React from 'react';
import { ThreePartTemplate } from './pages.styled';
import { HashLink as Link } from 'react-router-hash-link';
import { Program, ProgramMobile, Pakkeliste, Fadderbarn} from 'Images'
import useWindowSize from '../hooks/useWindowSize';
import { emojies } from '../utils/HtmlEntities';

export const Fadderuke = () => {
    const windowSize = useWindowSize()
    const image = windowSize.width < 1000 ? ProgramMobile : Program;
    return (
        <>
            <ThreePartTemplate textWidth={36}>
                <div className="page-title">
                    Fadderukene 2021
                </div>
                <div className="page-front">
                    <img src={image} alt="program"/>
                </div>
            </ThreePartTemplate>
            <ThreePartTemplate fontWeight={500} textWidth={36} style={{marginTop: '2rem'}}>
                <div className="page-title">
                    Program
                </div>
                <div className="page-text">
                    <p>
                        Velkommen til Fadderukene for Arkitektstudentene ved NTNU! Vi i Borderskabet har gleden av å invitere deg til to av de beste ukene dette året.
                        Det første du må gjøre for å være sikker på at du får med deg alt av nyheter og oppdateringer angående fadderukene er å søke opp gruppen
                        “Arkitekt NTNU – kull ‘21” på <a href="https://www.facebook.com/groups/1323038871429037/?ref=share">facebook</a> og melde deg inn i den.
                        Om du lurer på noe, kan du sende en mail til <Link to="/collegiet#Novicekommandeur">Novicekommandeur</Link> (faddersjefen) for Broderskabet.
                    </p>
                    <p>
                        <b>Mandag 16.08 BOKSTAVFEST</b><br/>
                        Kle deg ut som noe som starter på forbokstaven din! Gjør deg klar for å bli kjent med resten av dine medstudenter, her gjelder det å lære seg navn, så hva passer bedre enn en bokstavfest da? Vi staves.
                    </p>
                    <p>
                        <b>Tirsdag 17.08. LEILIGHET TIL LEILIGHET</b><br/>
                        Vi suser av gårde fra leilighet til leilighet og dette er en super mulighet til å bli kjent med flere {emojies.heart}
                    </p>
                    <p>
                        <b>Onsdag 18.08. RUSSEFEST</b><br/>
                        La oss mimre tilbake til grøftefylla, dunkemusikk og russeknuter! Ta på russedressen, noe rødt, noe hvitt eller noe blått og bli videregåendeelver igjen! Vi kongles {emojies.wink} {emojies.heart}
                    </p>
                    <p>
                        <b>Torsdag 19.08 BEACH & GRILL</b><br/>
                        Bli med på en deilig stranddag med bading, grilling, og kos! Ta med deg badetøy og din fineste hawaii-skjorte. Vi soles {emojies.heart}
                    </p>
                    <p>
                        <b>Fredag 20.08 RAVE</b><br/>
                        Vi finner fram glow sticks og alt som er neon, og gjør oss klar til tidenes rave! Vi raves {emojies.heart}
                    </p>
                    <p>
                        <b>Lørdag 21.08 DAFTING & TOGA</b><br/>
                        Etter gårsdagens rave samler vi krefter ved dafting på Nideelven. Vi tar med oss gummibåter og flyter en behagelig tur i godt selskap (HUSK FLYTEVEST!) På kvelden går turen til Roma… 327 år etter Kristus… Cæsar spiser en drue… Du og Cleopatra har kledd på dere det beste lakenet dere fant på IKEA… Hvem vinner Cæsars gunst og hvem blir sendt rett i Gladiatorkamp? Kom på Togafest og finn ut !! {emojies.tounge} Vi hermafrodites {emojies.wink} {emojies.heart}
                    </p>
                    <p>
                        <b>Søndag 22.08 ØLYMPISKE LEKER</b><br/>
                        Er du en vinnerskalle? Liker du øl? Gjør du alt for å vinne med laget ditt? Vi erklærer de ØLYMISKE LEKER FOR HERVED ÅPNET! Vi konkurreres {emojies.heart}
                    </p>
                    <p>
                        <b>Mandag 23.08 CHILL OG RESTUTISJON</b><br/>
                        Etter en krevende første-uke er det viktig å samle krefter til siste del av fadderukene. Sørg for å sove, hvile, spise litt mat og bli klar til morgendagens bar til bar! Vi chilles {emojies.heart}
                    </p>
                    <p>
                        <b>Tirsdag 24.08 BAR TIL BAR</b><br/>
                        Vi blir bedre kjent med din nye by og drar på bar til bar!
                    </p>
                    <p>
                        <b>Onsdag 25.08 AKTIVITETSDAG OG FEST</b><br/>
                        Vi lader opp til ny fest med en aktivitetsdag! Det blir kubbespill, leker og mer! Vi koses {emojies.heart}
                    </p>
                    <p>
                        <b>Torsdag 26.08 BEDRIFTSPRESENTASJON MED AFAG</b><br/>
                        Vi er så heldige at Broderskabets undegruppe Connect har fikset bedpress med AFAG (Arkitektenes fagforbund)! Bli med {emojies.heart}
                    </p>
                    <p>
                        <b>Fredag 27.08 FESTIVAL</b><br/>
                        Roskilde? Stavern? Øya? Meh. Dette er den festivalen som gjelder! Ta på din beste festival-outfit og gjør deg klar til en uforglemmelig kveld! Vi danses {emojies.heart}
                    </p>
                    <p>
                        <b>Lørdag 28.08. DAFTING OG GALLA TYPE 20-TALS</b><br/>
                        På dagen dafter vi gjennom Nidelva igjen. Ta med pils, snacks, brus eller snus. På kvelden kler vi på oss finstasen i Gatsbystil og feirer at vi kom oss helskinna gjennom fyll og fanteri i Trondheims gater i to uker. Vi perles {emojies.heart}
                    </p>
                    <p>
                        <b>Søndag 23. PIRBADET</b><br/>
                        Etter to lange uker med fest og morro, roer vi ned med en deilig dukkert på Pirbadet! Vi flytes {emojies.heart}
                    </p>

                </div>
                <div className="page-content">
                    <img src={Pakkeliste} alt="pakkeliste"/>
                    <img src={Fadderbarn} alt="fadderbarn"/>
                </div>
            </ThreePartTemplate>
        </>
    );
};
