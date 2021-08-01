import React from 'react';
import { A } from 'hookrouter';
import { StyledBox, StyledImage } from './Box.styled';

export const Box = ({title, path, thumbnail}) => {
    return (
        <StyledBox>
            <A href={`/${path}`}>
                <StyledImage thumbnail={thumbnail} />
                <div className="group-title">
                    <span>{ title }</span>
                </div>
            </A>
        </StyledBox>
    );
}
