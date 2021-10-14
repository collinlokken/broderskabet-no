import React from 'react';
import { Lett1 } from 'Images'

export const Lett = () => {
    return (
        <>
        <div className="page-title">
            Lett På Tråd
        </div>
        <div className="page-text">
            <p>
                Lett på Tråd er Broderskabets håndarbeidsgruppe som hovedsaklig driver med strikking og hekling. De arrangerer sosiale
                sammenkomster hvor det strikkes, hekles, utveksles erfaringer, og skravles om stort og smått. Du er hjertelig velkommen 
                uansett om du er nybegynner som ønsker å lære å strikke eller godt erfaren!
            </p>
            <p> 
                Hvis du er interessert kan du også strikke vår helt egne Broderskabsgenser, se oppskrift <a href="https://docplayer.me/194713826-Broderskabsgenseren-broderskabsgenseren-design-nanna-helland-berger.html">her</a> og tutorial <a href="https://www.youtube.com/playlist?list=PL3QmUHTcl3kg8PCq7Sp8U-5HlKS7nW_Vu">her</a>. Du kan nå undergruppen på <a href="mailto:lettpatrad@broderskabet.no">lettpatrad@broderskabet.no</a>.
            </p>
        </div>
        <div className="page-content">
            <img src={Lett1} alt=""/>
        </div>
        </>
    );
}