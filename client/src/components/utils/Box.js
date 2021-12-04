import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBox, StyledImage } from './Box.styled';

export const Box = ({title, path, thumbnail}) => {
    return (
        <StyledBox>
            <Link to={`/${path}`}>
                <StyledImage thumbnail={thumbnail} />
                <div className="group-title">
                    <span>{ title }</span>
                </div>
            </Link>
        </StyledBox>
    );
}
