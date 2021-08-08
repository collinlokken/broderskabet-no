import styled from 'styled-components';

export const StyledPage = styled.div`
    padding: 0 2rem;
    margin-top: 17vh;
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

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
        width: 50vw;
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
    margin-top: 2rem;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .page-title {
        font-size: 1.5rem;
        font-weight: 600;
        width: 10vw
    }
    .page-text {
        padding: 0 5vw;
        width: ${({textWidth}) => `${textWidth}vw`}
    }
    .page-text-segment {
        margin-bottom: 2rem;
    }
    .page-content {
        width: 40vw;
        flex-grow: 1;
    }
    .page-content img {
        width: 100%;
        padding: 0 6vw;
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
        }
        .page-text {
            width: 100%;
            margin: 2rem 0;
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
    background-image: url(${({background}) => background});
    background-position: center;
    background-size: cover;
    margin: 2vh 1vw 2vh 1vw;
    width: 35vw;
    flex-grow: 1;
    box-shadow: inset 15px 15px 12px 0 #00000054, inset -15px -15px 12px 0 #00000054;
    border: 1px solid #00000029;
    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-flow: column nowrap;
        width: 100%;
        height: 35vh;
    }
    &:hover {
        background-image: url(${({background2}) => background2});
    }
`