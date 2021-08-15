import React from 'react';
import { ThreePartTemplate, HomeImagePage } from './pages.styled'
import { Forsidebilde } from 'Images'

export const GroupBase = (props) => {
    return (
        <ThreePartTemplate textWidth={40}> {/* Needs three children */}
            {props.content}
        </ThreePartTemplate>
    );
}