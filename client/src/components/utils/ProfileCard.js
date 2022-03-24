import React, { useState } from 'react';
import { StyledProfileCard, StyledImage } from './ProfileCard.styled';

export const ProfileCard = (props) => {
    const [currentPhoto, setCurrentPhoto] = useState(0);
    return (
        <StyledProfileCard id={props.medlem.tittel}>
            <div className="profile-left">
                <div onMouseLeave={()=>setCurrentPhoto(0)}
                     onTouchEnd={()=>setCurrentPhoto(0)}
                     onTouchStart={()=>setCurrentPhoto(1)}
                     onMouseEnter={()=>setCurrentPhoto(1)} >
                    <StyledImage thumbnail={props.thumbnail} currentPhoto={currentPhoto} thisPhoto={0} />
                    <StyledImage thumbnail={props.thumbnail_alt} currentPhoto={currentPhoto} thisPhoto={1} />
                </div>
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