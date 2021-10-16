import React from 'react';

import { StyledFooter } from './Footer.styled';

export const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-text">
                <div>Arkitektstudentene Broderskab</div>
                <div>Alfred Getz' vei 3, 7492 Trondheim</div>
                <div><a href="mailto:kontakt@broderskabet.no">kontakt@broderskabet.no</a></div>
            </div>
            <div className="some-container">
                <a href="https://www.instagram.com/broderskabet/">
                    <div className="some-item"><i class="fab fa-instagram-square"></i></div>
                </a>
                <a href="https://www.facebook.com/arkitektstudentenesbroderskab">
                    <div className="some-item"><i class="fab fa-facebook"></i></div>
                </a>
            </div>
        </StyledFooter>
    )
}