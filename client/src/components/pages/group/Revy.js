import React from 'react';
import { Revy1, Revy2, Revy3, Revy4 } from 'Images';

export const Revy = () => {
    return (
        <>
        <div className="page-title">
            Arkitekt- og Designrevyen
        </div>
        <div className="page-text">
            <p>
                Revygruppa er et samarbeid mellom Broderskabet og Leonardo (hvor vi liker å påpeke at hovedansvaret og æren ligger hos oss), og har som hovedformål å lage den eminente Arkitekt- og Designrevyen. Som den nest eldste studieretning på Gløshaugen skulle det jo bare mangle at også vi har en revy.  
            </p>
            <p>
                Ved å lage revy følger det mange fordeler. Det fungere som en alternativ sosiale arena til tegnesalen og legger til rette for at studenter fra alle årskull får muligheten til å bli bedre kjent og lage noe meningsfylt, evt. ikke så meningsfylt, sammen. Revyen karikerer tilværelsen som arkitektstudent og sørger for stor grad av selvironi og god intern humor på studiet.
            </p>
            <p>
                En revyoppsetning krever folk av alle kaliber. Enten du skjuler et stort skuespillertallent, er rockestjerne, er flink til å sy, kan forskjellen på en USB og mini-jack, synger i dusjen, har fagbrev som snekker, hadde sommerjobb som baker, skriver lyriker i bursdagshilsen eller danser når du vasker hjemme har arkitektrevyen bruk for deg. I revyen er alle velkomne!
            </p>
            <p>
                Ikke la muligheten går fra deg. Bli med på moroa da vell!
            </p>
        </div>
        <div className="page-content">
            <img src={Revy1} alt=""/>
            <img src={Revy2} alt=""/>
            <img src={Revy3}alt=""/>
            <img src={Revy4} alt=""/>
        </div>
        </>
    );
}