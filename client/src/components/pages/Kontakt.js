import React from 'react';
import { ThreePartTemplate, HomeImagePage } from './pages.styled'
import { Forsidebilde } from 'Images'

export const Kontakt = () => {
    return (
        <ThreePartTemplate textWidth={40}> {/* Needs three children */}
            <div className="page-title">
                Kontakt
            </div>
            <div className="page-text">
                <div className="page-text-segment">
                    <b>Generelle henvendelser</b> For generelle henvendelser kan du kontakte oss på <a href="mailto:Kontakt@broderskabet.no">Kontakt@broderskabet.no</a>.
                    Ikke nøl med å ta kontakt hvis det er noe du lurer på! Det er også mulig å stikke innom oss på kontoret i 2. etasje på Stripa (vis a vis Akademika).
                    Om du ønsker å ta kontakt med spesifikke medlemmer i Collegiet kan du finne hver enkelts kontaktinformasjon på Collegiets egne side her (link til fanen om collegiet).
                </div>
                <div className="page-text-segment">
                    <b>Bedrift?</b>
                    <p>Bedrifter som ønsker å ta kontakt med Broderskabet kan henvende seg til vår bedriftskontakt Mali Ulfsen Horten via:</p>
                    <p>Mail: <a href="bedriftskontakt@broderskabet.no">bedriftskontakt@broderskabet.no</a></p>
                </div>
                <div className="page-text-segment">
                    <b>Undergrupper</b>
                    <p>Tidsskriftet A: <a href="mailto:post@tidsskrifteta.no">post@tidsskrifteta.no</a></p>
                    <p>Arkitekthjelpen: <a href="mailto:post@arkitekthjelpen.no">post@arkitekthjelpen.no</a></p>
                    <p>Connect: <a href="mailto:connect@broderskabet.no">connect@broderskabet.no</a></p>
                    <p>Hoeychoret: <a href="mailto:hoeychoret@broderskabet.no">hoeychoret@broderskabet.no</a></p>
                    <p>Arrangementsgruppen: <a href="mailto:ceremonimester@broderskabet.no">ceremonimester@broderskabet.no</a></p>
                    <p>Arkitekt TUR: <a href="mailto:tur@broderskabet.no">tur@broderskabet.no</a></p>
                    <p>Bryggegruppen: <a href="mailto:brygg@broderskabet.no">brygg@broderskabet.no</a></p>
                    <p>Bævern's Balljklubb: <a href="mailto:BB@broderskabet.no">BB@broderskabet.no</a></p>
                    <p>Lett på Tråd: <a href="mailto:lettpatrad@broderskabet.no">lettpatrad@broderskabet.no</a></p>
                    <p>Revygruppen: <a href="mailto:revy@broderskabet.no">revy@broderskabet.no</a></p>
                </div>
                <div className="page-text-segment">
                    <b>Post</b>
                    <p>Arkitektstudentenes Broderskab</p>
                    <p>Alfred Getz’ vei 3</p>
                    <p>Sentralbygg 1</p>
                    <p>7491 Trondheim</p>
                </div>
            </div>
            <HomeImagePage>
                <img src={Forsidebilde} alt="sketch of boy and girl"/>
            </HomeImagePage>
        </ThreePartTemplate>
    );
};
