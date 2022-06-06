import React, { useState } from 'react'
import { ProfileCard } from '../utils/ProfileCard'
import { ThreePartTemplate, StyledGroupPhoto } from './pages.styled'
import useWindowSize from '../hooks/useWindowSize';
import { blest, blest_t, ceremoni, ceremoni_t, chroniker, chroniker_t, novice, novice_t, phinans, phinans_t, troldquinde, troldquinde_t, domina, domina_t, vicedom, vicedom_t, Felles, Felles_t} from 'Images'
import { useQuery } from 'react-query';
import { sanity, imageUrlBuilder } from '../../sanity';

export const Collegiet = () => {
    const windowSize = useWindowSize()
    const isMobile = windowSize.width < 1000;
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const query = `
        *[ _type == 'collegiemedlem' ] { id, tittel, telefon, email, navn, beskrivelse, tekst}
    `;
    const { data: collegiemedlem } = useQuery('collegiemedlem', () => sanity.fetch(query));
    if (!collegiemedlem) {
        return <h1>Loading…</h1>;
    }
    return (
        <ThreePartTemplate textWidth={25}>
            <div className="page-title">
                Collegiet
            </div>
            <div className="page-cards">
                { isMobile &&
                <div className="group-photo-container"
                    onTouchEnd={()=>setCurrentPhoto(0)}
                    onTouchStart={()=>setCurrentPhoto(1)}
                >
                    <StyledGroupPhoto thumbnail={Felles} currentPhoto={currentPhoto} thisPhoto={0}/>
                    <StyledGroupPhoto thumbnail={Felles_t} currentPhoto={currentPhoto} thisPhoto={1}/>
                </div>}
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
                { !isMobile &&
                <div className="group-photo-container"
                    onMouseLeave={()=>setCurrentPhoto(0)}
                    onMouseEnter={()=>setCurrentPhoto(1)}
                >
                    <StyledGroupPhoto thumbnail={Felles} currentPhoto={currentPhoto} thisPhoto={0}/>
                    <StyledGroupPhoto thumbnail={Felles_t} currentPhoto={currentPhoto} thisPhoto={1}/>
                </div>}
                <ProfileCard thumbnail={domina} thumbnail_alt={domina_t} medlem={collegiemedlem.filter(e => e.id==1)[0]}/>
                <ProfileCard thumbnail={vicedom} thumbnail_alt={vicedom_t} medlem={collegiemedlem.filter(e => e.id==2)[0]}/>
                <ProfileCard thumbnail={troldquinde} thumbnail_alt={troldquinde_t} medlem={collegiemedlem.filter(e => e.id==8)[0]}/>
                <ProfileCard thumbnail={blest} thumbnail_alt={blest_t} medlem={collegiemedlem.filter(e => e.id==3)[0]}/>
                <ProfileCard thumbnail={ceremoni} thumbnail_alt={ceremoni_t} medlem={collegiemedlem.filter(e => e.id==4)[0]}/>
                <ProfileCard thumbnail={chroniker} thumbnail_alt={chroniker_t} medlem={collegiemedlem.filter(e => e.id==5)[0]}/>
                <ProfileCard thumbnail={novice} thumbnail_alt={novice_t} medlem={collegiemedlem.filter(e => e.id==6)[0]}/>
                <ProfileCard thumbnail={phinans} thumbnail_alt={phinans_t} medlem={collegiemedlem.filter(e => e.id==7)[0]}/>
            </div>
        </ThreePartTemplate>
    )
} 