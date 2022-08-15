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
                    <i>
                    &#127475;&#127476; Norsk: (english below)
                    </i>
                    <p>
                        Velkommen til fadderukene 2022 for arkitektstudentene ved NTNU! &#129395;
                    </p>
                    <p>
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
                        Søk opp gruppen "Arkitektur NTNU - kull '22" på facebook og bli medlem &#128516;
                    </p>
                    <p>
                        Link til gruppa: <a href='https://www.facebook.com/groups/arkitekturfadderukene2022/'>her</a>
                    </p>
                    <br />
                    <h4>
                        2-årig master i arkitektur / sustainable architecture / urban ecological planning:
                    </h4>
                    <p>
                        To get all the news and updates about the buddy program, please find the group "IAP NTNU- Master '22" on facebook and join it &#128516;
                    </p>
                    <p>
                        Link to the group: <a href='https://www.facebook.com/groups/1000461223994924/'>here</a>
                    </p>
                    <br/>
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
                    <br/>
                    <i>
                    &#127468;&#127463; In english:
                    </i>
                    <p>
                        Hi and welcome to master studies at department of architecture and planning, at NTNU!!! &#129395;   
                    </p>
                    <p>
                        We have been so looking forward to welcoming you and celebrating the start of your amazing studies. We hope you are as excited as us and want
                        to join us in this celebration. We have planned so much fun stuff, so do not hestitate to sign up!! Buddy program 2022 are for all the new students
                        at architecture and planning department. Registration for the Buddy program is done through this link: <a href="https://forms.gle/o5tJMRkmN8xspDfW6">here</a>
                    </p>
                    <h4>
                        2-årig master i arkitektur / sustainable architecture / urban ecological planning:
                    </h4>
                    <p>
                        To get all the news and updates about the buddy program, please find the group "IAP NTNU- Master '22" on facebook and join it &#128516;
                    </p>
                    <p>
                        Link to the group: <a href='https://www.facebook.com/groups/1000461223994924/'>here</a>
                    </p>
                    <p>
                        For questions or other inquiries, you can contact the novice commander (head of the Buddy program):
                    </p>
                    <p>
                        Ingrid Marie Sæther Halbjørhus<br/>
                        Tlf: 47601338 <br/>
                        E-mail: <a href="mailto:novicekommandeur@broderskabet.no">novicekommandeur@broderskabet.no</a>
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
