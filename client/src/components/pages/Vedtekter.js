import React from 'react';
import { ThreePartTemplate, HomeImagePage } from './pages.styled'
import Forsidebilde from '../../img/Forsidebilde-crop.png'


export const Vedtekter = () => {
    return (
        <ThreePartTemplate> {/* Needs three children */}
            <div className="page-title">
                Vedtekter
            </div>
            <div className="page-text">
                <p>
                Vedtekter for Arkitektstudentenes Broderskab<br />
                Vedtatt 19. oktober 2018<br />
                § 1 Formål<br />
                <br />
                Linjeforeningen Arkitektstudentenes Broderskab ble stiftet 1.desember 1913. Arkitektstudentenes Broderskab omtales heretter som «Broderskabet». Broderskabet skal være partipolitisk nøytral og skal ikke brukes som forum til å fremme saker eller holdninger som ikke er av studentpolitisk art. Kjerneområdene til Broderskabet er følgende:
                <br /><br />
                Sosialt: Broderskabet skal være den første instans nye arkitektstudenter møter når de kommer til Gløshaugen (fadderukene), og har som mål å rekruttere flest mulig arkitektstudenter inn som aktive medlemmer i linjeforeningen. Broderskabet søker å styrke de sosiale forbindelsene innad i kull og mellom kullene, blant studentene som går 5-årig masterprogram for Arkitektur, samt utvekslingsstudenter og andre som tar mastergrad innen arkitektur ved fakultetet. Broderskabet skal også bidra til å styrke samholdet mellom de ulike studieretningene ved NTNU.
                <br /><br />
                Profesjonelt: Linjeforeningen skal fremme god kontakt med næringslivet, med hovedfokus på framtidige og potensielle arbeidsgivere. Broderskabet har også som mål å tilby alternative, faglig relevante aktiviteter/kurs til studentene, og skal best mulig favne og stimulere mangfoldet av medlemmenes interesser.
                </p>
            </div>
            <HomeImagePage>
                <img src={Forsidebilde} alt="sketch of boy and girl"/>
            </HomeImagePage>
        </ThreePartTemplate>
    );
};
