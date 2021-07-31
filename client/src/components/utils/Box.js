import React from 'react';
import { A } from 'hookrouter';
import { StyledBox, StyledImage } from './Box.styled';

export const Box = ({title, path}) => {
    return (
        <StyledBox>
            <A href={`/${path}`}>
                <StyledImage />
                <div className="group-title">
                    <span>{ title }</span>
                </div>
            </A>
        </StyledBox>
    );
}
