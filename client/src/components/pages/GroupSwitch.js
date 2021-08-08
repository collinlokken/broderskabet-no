import React from "react";
import { GroupBase } from "./GroupBase";
import { PageNotFound } from "./PageNotFound";
import { ArrKom, Tur, Hjelpen, Brygge, Baeveren, Connect, Choret, Jam, Lett, Pr, Revy, Tidsskriftet } from "./group";

export const GroupSwitch = (props) => {
    switch (props.id) {
        case "arrkom":
            return <GroupBase content ={<ArrKom />} />;
        case "tur":
            return <GroupBase content ={<Tur />} />;
        case "hjelpen":
            return <GroupBase content ={<Hjelpen />} />;
        case "brygge":
            return <GroupBase content ={<Brygge />} />;
        case "baeveren":
            return <GroupBase content ={<Baeveren />} />;
        case "connect":
            return <GroupBase content ={<Connect />} />;
        case "hoeychoret":
            return <GroupBase content ={<Choret />} />;
        case "jamgruppen":
            return <GroupBase content ={<Jam />} />;
        case "lettpatrad":
            return <GroupBase content ={<Lett />} />;
        case "pr":
            return <GroupBase content ={<Pr />} />;
        case "revy":
            return <GroupBase content ={<Revy />} />;
        case "tidsskriftet":
            return <GroupBase content ={<Tidsskriftet />} />;
        default:
            return <PageNotFound />;
    }
}