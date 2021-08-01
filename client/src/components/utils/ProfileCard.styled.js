import styled from 'styled-components';

export const StyledProfileCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 35vw;
    padding: 1vw;
    margin: 2vh 1vw 2vh 1vw;
    box-shadow: 0 15px 12px -12px #00000026;
    border: 1px solid #00000029;
    flex-grow: 1;
    .profile-left {
        display: flex;
        flex-direction: column;
        width: 30%;
        flex-grow: 2;
        padding: 1vw;
    }
    .profile-right {
        width: 33%;
        flex-grow: 1;
        padding: 1vw;
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
        }
    } 
`

export const StyledImage = styled.div`
    background-image: url(${({thumbnail}) => thumbnail});
    background-position: center;
    background-size: cover;
    border: 1px solid #00000029;
    margin: 0 auto;
    width: 200px;
    height: 200px;
`