import React from 'react';
import { ThreePartTemplate } from './pages.styled'
import { Box } from '../utils/Box'
import Arkitekthjelpen from '../../img/Arkitekthjelpen.png'
import Arrkom from '../../img/Arrkom.png'
import Bevern from '../../img/Bevern.png'
import Bryggegruppen from '../../img/Bryggegruppen.png'
import Connect from '../../img/Connect.png'
import Hoeychoret from '../../img/Hoeychoret.png'
import Jamgruppen from '../../img/Jamgruppen.png'
import Lettpt from '../../img/Lettpt.png'
import PR from '../../img/PR.png'
import Revygruppen from '../../img/Revygruppen.png'
import Tidsskriftet from '../../img/Tidsskriftet.png'
import Turgruppen from '../../img/Turgruppen.png'


export const Groups = () => {
    const path = (group) => `undergrupper/${group}`
    return (
        <ThreePartTemplate textWidth={36}>
            <div className="page-title">
                Undergrupper
            </div>
            <div className="page-text">
                I Broderskabet er det et bredt tilbud av forskjellige undergrupper. Gruppene samler arkitektstudentene på tvers av alle
                trinnene og er en arena for å møte andre medstudenter! Se mer om de forskjellige gruppene på gruppens egen side.
            </div>
            <div className="group-box-container page-content">
                <Box title="ArrKom" path={path("arrkom")} thumbnail={Arrkom}/>
                <Box title="ArkitektTUR" path={path("tur")} thumbnail={Turgruppen}/>
                <Box title="Arkitekt-hjelpen" path={path("hjelpen")} thumbnail={Arkitekthjelpen}/>
                <Box title="Brygge-gruppa" path={path("brygge")} thumbnail={Bryggegruppen}/>
                <Box title="Bæver'n" path={path("baeveren")} thumbnail={Bevern}/>
                <Box title="Connect" path={path("connect")} thumbnail={Connect}/>
                <Box title="Hoeychoret" path={path("hoeychoret")} thumbnail={Hoeychoret}/>
                <Box title="Jamgruppen" path={path("jamgruppen")} thumbnail={Jamgruppen}/>
                <Box title="Lett på Tråd" path={path("lettpatrad")} thumbnail={Lettpt}/>
                <Box title="PR-gruppen" path={path("pr")} thumbnail={PR}/>
                <Box title="Revygruppen" path={path("revy")} thumbnail={Revygruppen}/>
                <Box title="Tidsskriftet A" path={path("tidsskriftet")} thumbnail={Tidsskriftet}/>
            </div>
        </ThreePartTemplate>
    );
};