import styled from 'styled-components';

export const StyledPage = styled.div`
    padding: 0 2rem;
    margin-top: 17vh;
    min-height: calc(100vh - 17vh - 6rem - 40px - 35px); /*minus height of navbar and footer*/
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;

    .group-box-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-content: space-between;
        margin-bottom: 2rem;
    }
`

export const Sponsors = styled.div`
    img {
        width: 40vw;
        margin: 5% 0;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        img {
            width: 90vw;
            margin: 20px 0;
        }
    } 
`

export const HomeImage = styled.div`
    img {
        width: 47vw;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        img {
            width: 90vw;
        }
    } 
`

export const HomeImagePage = styled.div`
    img {
        width: 30vw;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        img {
            width: 90vw;
        }
    } 
`

export const ThreePartTemplate = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .page-title {
        font-size: 1.5rem;
        font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '600'};
        width: 10vw;
        flex-grow: 1;
    }
    .page-text {
        padding: 0 1.5vw 0 3vw;
        width: ${({textWidth}) => `${textWidth}vw`}
    }
    .page-text h2 {
        margin-top: 50px;
        padding-top: 20px;
        border-top: 1px solid #b3b3b3;
    }
    .page-text-segment {
        margin-bottom: 2rem;
    }
    .page-content {
        width: 40vw;
    }
    .page-content img {
        width: 100%;
        padding: 0 3vw 0 1.5vw;
    }
    .page-front {
        max-width: calc(${({textWidth}) => `${textWidth}vw`} + 40vw);
        @media (max-width: ${({theme}) => theme.mobile}) {
            max-width: 100%;
        }
    }
    .page-front img {
        width: 100%;
        padding: 0 3vw 0 3vw;
    }
    .page-cards {
        width: 70vw;
        display: flex;
        flex-flow: row wrap;
        flex-grow: 1;
    }
    .about {
        margin: 2vh 1vw 2vh 1vw;
        width: 35vw;
        flex-grow: 1;
        @media (max-width: ${({theme}) => theme.mobile}) {
            flex-flow: column nowrap;
            width: 100%;
        }
    }
    .group-photo-container {
        @media (max-width: ${({theme}) => theme.mobile}) {
            width: 100%;
        }
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        .page-title {
            font-size: 1.5rem;
            font-weight: 600;
            width: 90vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 6vw;
        }
        .page-content {
            width: 100%;
            margin: 2rem 0;
        }
        .page-content img {
            padding: 0 3vw;
        }
        .page-text {
            width: 100%;
            padding: 0 3vw;
        }
        .page-cards {
            width: 90vw;
            display: flex;
            flex-flow: column nowrap;
            flex-grow: 1;
            align-items: center;
        }
    }
`

export const StyledGroupPhoto = styled.div`
    background-image: url(${({thumbnail}) => thumbnail});
    background-position: center;
    background-size: cover;
    margin: 0vh 1vw 0vh 1vw;
    width: 35vw;
    flex-grow: 1;
    height: ${({currentPhoto, thisPhoto})=> currentPhoto==thisPhoto? "400px" : "0.1px"};
    box-shadow: inset 15px 15px 12px 0 #00000054, inset -15px -15px 12px 0 #00000054;
    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-flow: column nowrap;
        width: 100%;
        height: ${({currentPhoto, thisPhoto})=> currentPhoto==thisPhoto? "35vh" : "0.1px"};
    }
`

export const StyledEvent = styled.div`
    border: 1px solid black;
    flex-grow: 1;
    .event-title
`