import React from 'react';
import { ThreePartTemplate, HomeImagePage } from '/client/src/components/pages/pages.styled'
import Forsidebilde from '/client/src/img/Forsidebilde-crop.png'

export const GroupBase = (props) => {
    return (
        <ThreePartTemplate textWidth={40}> {/* Needs three children */}
            {props.content}
            <HomeImagePage>
                <img src={Forsidebilde} alt="sketch of boy and girl"/>
            </HomeImagePage>
        </ThreePartTemplate>
    );
}