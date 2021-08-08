import React from 'react';
import { StyledProfileCard, StyledImage } from './ProfileCard.styled';

export const ProfileCard = (props) => {
    return (
        <StyledProfileCard>
            <div className="profile-left">
                <StyledImage thumbnail={props.thumbnail}/>
                <div className="contact-info">
                    <p><b>Kontaktinfo</b></p>
                    <p>Telefon: {props.medlem.telefon}</p>
                    <p>Email: <a href={`mailto:${props.medlem.email}`}>{props.medlem.email}</a></p>
                </div>
            </div>
            <div className="profile-right">
                <p><b>{props.medlem.tittel}</b> {props.medlem.navn}</p>
                <p>
                    <i>&laquo;{props.medlem.beskrivelse}&raquo;</i>
                </p>
                <p>
                    {props.medlem.tekst}
                </p>
            </div>
        </StyledProfileCard>
    )
}