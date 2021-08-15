import React from 'react';
import {Bevern1, Bevern2} from 'Images';

export const Baeveren = () => {
    return (
        <>
        <div className="page-title">
            Bæveren
        </div>
        <div className="page-text">
            <p>
                Fotballklubben i Broderskabet har fått navnet sitt fra naturens arkitekt: beveren. 
            </p>
            <p>
                Klubben er en åpen ballklubb for begge kjønn i alle aldre. Klubben spiller mixed 7-er utefotball i 7denterligaen
                (begge kjønn). Sesongen er fra september til mai, tilpasset studenter. Kampane er på søndager utenom eksamensperioder.
                Uformelle treninger finner sted en gang i uken i sesong. Nye spillere ønskes velkommen til alle tider på året, så bli med!
            </p>
            <p>
                <b>Historie:</b><br />
                Legendene sier at arkitektstudentene “prata på” å starte et fotballag i 2011. Offisielt ble laget dannet i 2012 og dette ble starten på all moroa. Siden da har det både gått opp og ned på tabellen, med blant annet en knallsterk vårsesong i 2014. Klubben ble styrt av ivrige sjeler fram til det første offisielle styret ble valgt inn i tidlig 2015. Man hadde da bestemt seg for å bli med i den nye studentligaen som skulle starte opp til høsten, 7denterligaen. Vi ser fram til å skape mer fotballhistorie neste sesong, og ønsker alle fotballinteresserte velkommen! 
            </p>
            <p>
                Se mer på vår <a href="https://www.facebook.com/BaevernsBK/år">FaceBook-side</a>. 
            </p>
        </div>
        <div className="page-content">
            <img src={Bevern1} alt=""/>
            <img src={Bevern2} alt=""/>
        </div>
        </>
    );
}