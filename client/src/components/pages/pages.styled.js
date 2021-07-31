import styled from 'styled-components';

export const StyledPage = styled.div`
    @media (max-width: ${({theme})=> theme.mobile}) {
        margin-top: 1rem;
    }
    padding: 0 2rem;
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
        }
    } 
`

export const HomeImage = styled.div`
    img {
        width: 60vw;
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
        width: 15vw
    }
    .page-text {
        width: 25vw;
    }
    .page-content {
        width: 40vw;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        .page-title {
            font-size: 1.5rem;
            font-weight: 600;
        }
        .page-content {
            width: 100%;
        }
        .page-text {
            width: 100%;
            margin: 2rem 0;
        }
    }
`