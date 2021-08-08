import React from 'react'
import { ProfileCard } from '../utils/ProfileCard'
import { ThreePartTemplate, StyledGroupPhoto } from './pages.styled'
import useWindowSize from '/client/src/components/hooks/useWindowSize';

import blest from '/client/src/img/collegiet/Blest.jpg'
import ceremoni from '/client/src/img/collegiet/Ceremoni.jpg'
import chroniker from '/client/src/img/collegiet/Chroniker.jpg'
import novice from '/client/src/img/collegiet/Novice.jpg'
import phinans from '/client/src/img/collegiet/Phinans.jpg'
import troldquinde from '/client/src/img/collegiet/Troldquinde.jpg'
import domina from '/client/src/img/collegiet/Domina.jpg'
import vicedom from '/client/src/img/collegiet/Vicedom.jpg'
import Felles from '/client/src/img/collegiet/1felles.jpeg'

import { Blaestemester, Ceremonimester, Chronikeskriffuer, Domina, Novicekommandeur, Phinancephut, Troldquinden, Vicedominus } from './Styret'

export const Collegiet = () => {
    const windowSize = useWindowSize()
    const isMobile = windowSize.width < 1000;
    return (
        <ThreePartTemplate textWidth={25}>
            <div className="page-title">
                Collegiet
            </div>
            <div className="page-cards">
                { isMobile && <StyledGroupPhoto background={Felles}/>}
                <div className="about">
                    <p>
                    Collegiet er hovedstyret i Broderskabet og fungerer som det øverste organ i linjeforeningen. Collegiet står for den daglige driften av linjeforeningen og holder ukentlige møter på Broderskabskontoret. En gang i måneden avholdes det UGLE-møte (undergruppeleder-møte), der Collegiet og undergruppelederne kommer sammen for å samkjøre driften i Broderskabet og diskutere viktige saker.
                    </p>
                    <p>
                    I tillegg arrangerer Collegiet fadderukene, phuniseringen, immatrikuleringsballet, julegrøt, og undergruppefest for å nevne noe. Vi holder Broderskabskontoret i stand, planlegger opptaket av nye medlemmer og jubileum.
                    </p>
                    <p>
                    Det er Collegiet som representerer Broderskabet utad på andre linjeforeningers tilstelninger. Collegiets medlemmer velges ved Broderskabets generalforsamling i Oktober.
                    </p>
                    <p>
                    For mer informasjon om de forskjellige stillingene i Collegiet og kontaktinformasjon, se deres egne sider.
                    </p>
                </div>
                { !isMobile && <StyledGroupPhoto background={Felles}/>}
                <ProfileCard thumbnail={domina} medlem={Domina}/>
                <ProfileCard thumbnail={vicedom} medlem={Vicedominus}/>
                <ProfileCard thumbnail={blest} medlem={Blaestemester}/>
                <ProfileCard thumbnail={ceremoni} medlem={Ceremonimester}/>
                <ProfileCard thumbnail={chroniker} medlem={Chronikeskriffuer}/>
                <ProfileCard thumbnail={novice} medlem={Novicekommandeur}/>
                <ProfileCard thumbnail={phinans} medlem={Phinancephut}/>
                <ProfileCard thumbnail={troldquinde} medlem={Troldquinden}/>
            </div>
        </ThreePartTemplate>
    )
} 