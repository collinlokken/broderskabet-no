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
                    Fadderukene 2022
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
                        Velkommen til fadderukene 2022 for arkitektstudentene ved NTNU!
                        Vi i Broderskabet gratulerer så mye med plass på dette herlige studiet, dere har så mye gøy
                        i vente! Aller først ut er fadderukene 2022, i løpet av disse to ukene vil dere blant annet bli
                        bedre kjent med Trondheim, linjeforeningen vår og ikke minst hverandre.
                        Det første du må gjøre for å få med deg alle nyheter og oppdateringer angående fadderukene er å finne gruppa vår på facebook!
                    </p>
                    <br />
                    <h4>
                        5-årig master i arkitektur:
                    </h4>
                    <p>
                        For å få med deg alle nyheter og oppdateringer angående fadderukene:
                    </p>
                    <p>
                        Søk opp gruppen "Arkitektur NTNU - kull '22" på facebook og bli medlem:)
                    </p>
                    <p>
                        Link til gruppa: <a href='https://www.facebook.com/groups/arkitekturfadderukene2022/'>her</a>
                    </p>
                    <br />
                    <h4>
                        2-årig master i arkitektur / sustainable architecture / urban ecological planning:
                    </h4>
                    <p>
                        To get all the news and updates about the buddy program, please find the group "IAP NTNU- Master '22" on facebook and join it:)
                    </p>
                    <p>
                        Link to the group: <a href='https://www.facebook.com/groups/1000461223994924/'>here</a>
                    </p>
                    <br />
                    <p>
                        Fadderukene 2022 er for alle nye studenter ved Arkitektur på NTNU og er helt gratis!
                        Påmelding til fadderukene 2022 gjøres i dette <a href="https://forms.gle/o5tJMRkmN8xspDfW6">skjemaet</a>
                    </p>
                    <p>
                        For spørsmål eller andre henvendelser, kan dere ta kontakt med <Link to="/collegiet#Novicekommandeur">Novicekommandeur</Link> (faddersjef):
                    </p>
                    <p>
                        Ingrid Marie Sæther Halbjørhus<br/>
                        Tlf: 47601338 <br/>
                        E-post: <a href="mailto:novicekommandeur@broderskabet.no">novicekommandeur@broderskabet.no</a>
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
