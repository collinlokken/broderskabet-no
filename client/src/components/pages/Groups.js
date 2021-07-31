import React from 'react';
import { ThreePartTemplate } from './pages.styled'
import { Box } from '../utils/Box'

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
                <Box title="ArrKom" path="arrokom"/>
                <Box title="ArkitektTUR" path="arkitektur"/>
                <Box title="Arkitekt-hjelpen" path="arkitekthjelpen"/>
                <Box title="Brygge-gruppa" path="bryggegruppa"/>
                <Box title="Bæver'n" path="baeveren"/>
                <Box title="Connect" path="connect"/>
                <Box title="Hoeychoret" path="hoeychoret"/>
                <Box title="Jamgruppen" path="jamgruppen"/>
                <Box title="PR-gruppen" path="pr"/>
                <Box title="Revygruppen" path="revy"/>
                <Box title="Tidsskriftet A" path="tidsskriftet"/>
            </div>
        </ThreePartTemplate>
    );
};