import React from 'react';
import{ HomeImage } from './pages.styled'
import { Forsidebilde } from 'Images'

export const Home = () => {
    return (
        <HomeImage>
            <img src={Forsidebilde} alt="sketch of boy and girl"/>
        </HomeImage>
    );
};
