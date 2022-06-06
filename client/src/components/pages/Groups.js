import React from 'react';
import { ThreePartTemplate } from './pages.styled'
import { Box } from '../utils/Box'
import { Arkitekthjelpen, ArrKom, Bevern, Bryggegruppen, Connect, Hoeychoret, Jamgruppen, Lettpt, PR, Revygruppen, Tidsskriftet, Turgruppen } from 'Images';


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
                <Box title="ArrKom" path={path("arrkom")} thumbnail={ArrKom}/>
                <Box title="ArkitektTUR" path={path("tur")} thumbnail={Turgruppen}/>
                <Box title="Arkitekt-hjelpen" path={path("hjelpen")} thumbnail={Arkitekthjelpen}/>
                <Box title="Brygge-gruppa" path={path("brygge")} thumbnail={Bryggegruppen}/>
                <Box title="Bæver'n" path={path("baeveren")} thumbnail={Bevern}/>
                <Box title="Connect" path={path("connect")} thumbnail={Connect}/>
                <Box title="Hoeychoret" path={path("hoeychoret")} thumbnail={Hoeychoret}/>
                <Box title="Jamgruppen" path={path("jamgruppen")} thumbnail={Jamgruppen}/>
                <Box title="Lett på Tråd" path={path("lettpatrad")} thumbnail={Lettpt}/>
                <Box title="PR-gruppen" path={path("pr")} thumbnail={PR}/>
                <Box title="AD-revyen" path={path("revy")} thumbnail={Revygruppen}/>
                <Box title="Tidsskriftet A" path={path("tidsskriftet")} thumbnail={Tidsskriftet}/>
            </div>
        </ThreePartTemplate>
    );
};