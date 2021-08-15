import styled from 'styled-components';

export const StyledProfileCard = styled.div`
    scroll-margin-top: 14vh;
    display: flex;
    justify-content: space-evenly;
    width: 35vw;
    padding: 1vw;
    margin: 2vh 1vw 2vh 1vw;
    box-shadow: 0 15px 12px -12px #00000026;
    border: 1px solid #00000029;
    flex-grow: 1;
    background-color: ${({theme}) => theme.secondaryLight};
    .profile-left {
        display: flex;
        flex-direction: column;
        width: 30%;
        flex-grow: 2;
        padding: 5px;
    }
    .contact-info {
        overflow-wrap: break-word;
    }
    .profile-right {
        width: 33%;
        max-height: 492px;
        flex-grow: 1;
        padding: 10px;
        overflow-y: auto;
    }
    .contact-info {
        padding: 5px;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-flow: column nowrap;
        width: 100%;
        .profile-left {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .profile-right {
            width: 100%;
            height: 70vw;
            box-shadow: inset 0px 10px 12px -12px #00000054;
        }
    } 
`

export const StyledImage = styled.div`
    background-image: url(${({thumbnail}) => thumbnail});
    background-position: center;
    background-size: cover;
    border: 1px solid #00000029;
    margin: 0 auto;
    width: 100%;
    height: 20vw;
    box-shadow: inset 15px 15px 12px 0 #00000054, inset -15px -15px 12px 0 #00000054;
    @media (max-width: ${({theme}) => theme.mobile}) {
        height: 70vw;
    }
`