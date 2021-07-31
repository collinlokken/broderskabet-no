import React from 'react';
import { ThreePartTemplate, HomeImagePage } from './pages.styled'
import Forsidebilde from '../../img/Forsidebilde-crop.png'


export const Trondheim = () => {
    return (
        <ThreePartTemplate> {/* Needs three children */}
            <div className="page-title">
                Byen og Gløshaugen
            </div>
            <div className="page-text">
                <p>
                    Velkommen som ny student til Trondheim by! Det sies at Trondheim er Norges beste studentby og med god grunn!
                    Her bor det rundt 35 000 studenter fra Norge og verden, og vi utgjør nesten 20 prosent av byens befolkning.
                    Trondheim har et levende studentmiljø og hvis man ønsker å engasjere seg er mulighetene mange!
                </p>
                <p>
                    I selve byen er Studentersamfundet et sentralt sted for mange studenter! Det er en organisasjon for studenter
                    som drives av studentene, for studentene. Det ikoniske røde bygget huser mange konserter, kulturarrangementer,
                    barer, en cafe og en restaurant. Det er gjerne her man kommer for en kveld på byen, for quiz i ukedagene,
                    for debatter, og for å ta seg en prat over en øl eller to. Her er det med andre ord noe for alle! Se mer om
                    Studentersamfundet <a href="https://www.samfundet.no/">her</a>.
                </p>
                <p>
                    Gløshaugen er NTNUs campus hvor arkitektstudentene holder til, sammen med nesten 20 000 andre studenter.
                    I Stripa i sentralbygget er der man har det meste av undervisningen i auditorium, med tegnesalene ovenfor.
                    På Stripa finner man også kantine, kiosk, cafe og bokhandel.
                </p>
            </div>
            <HomeImagePage>
                <img src={Forsidebilde} alt="sketch of boy and girl"/>
            </HomeImagePage>
        </ThreePartTemplate>
    );
};
