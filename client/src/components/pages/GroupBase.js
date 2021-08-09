import React from 'react';
import { ThreePartTemplate, HomeImagePage } from './pages.styled'
import Forsidebilde from '../../img/Forsidebilde-crop.png'

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