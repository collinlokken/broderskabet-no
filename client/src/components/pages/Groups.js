import React from 'react';
import { ThreePartTemplate } from './pages.styled'
import { Box } from '../utils/Box'
import B_sort from '../../img/B_sort.png'
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

    return (
        <ThreePartTemplate>
            <div className="page-title">
                Undergrupper
            </div>
            <div className="page-text">
                I Broderskabet er det et bredt tilbud av forskjellige undergrupper. Gruppene samler arkitektstudentene på tvers av alle
                trinnene og er en arena for å møte andre medstudenter! Se mer om de forskjellige gruppene på gruppens egen side.
            </div>
            <div className="group-box-container page-content">
                <Box title="ArrKom" path="arrokom" thumbnail={Arrkom}/>
                <Box title="ArkitektTUR" path="arkitektur" thumbnail={Turgruppen}/>
                <Box title="Arkitekt-hjelpen" path="arkitekthjelpen" thumbnail={Arkitekthjelpen}/>
                <Box title="Brygge-gruppa" path="bryggegruppa" thumbnail={Bryggegruppen}/>
                <Box title="Bæver'n" path="baeveren" thumbnail={Bevern}/>
                <Box title="Connect" path="connect" thumbnail={Connect}/>
                <Box title="Hoeychoret" path="hoeychoret" thumbnail={Hoeychoret}/>
                <Box title="Jamgruppen" path="jamgruppen" thumbnail={Jamgruppen}/>
                <Box title="Lett på Tråd" path="lettpatrad" thumbnail={Lettpt}/>
                <Box title="PR-gruppen" path="pr" thumbnail={PR}/>
                <Box title="Revygruppen" path="revy" thumbnail={Revygruppen}/>
                <Box title="Tidsskriftet A" path="tidsskriftet" thumbnail={Tidsskriftet}/>
            </div>
        </ThreePartTemplate>
    );
};