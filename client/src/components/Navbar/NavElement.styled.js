import styled from 'styled-components';

export const StyledNavElement = styled.div`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: 0.3rem;
    .sublink-container {
        background-color: ${({theme, toggle}) => toggle ? theme.secondaryLight : "blur(10px)"};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        white-space: nowrap;
    }
    .sublink-container:nth-child(n+2){
        opacity: ${({toggle}) => toggle ? "1" : "1.0"};
        transition: opacity 0.5s;
        transform: ${({ toggle }) => toggle ? 'translateY(0)' : 'translateY(-100vh)'};
        margin-top: -1px;
    }
    .sublink-container:first-child{
        border-bottom: 1px solid black;
    }
    .sublink-container:nth-child(2){
        border-top: 1px solid black;
    }

    z-index: 1;
    min-width: 15%;

    @media (max-width: ${({theme}) => theme.mobile}) {
        .sublink-container {
            display: None;
        }
        display: none;
    }
`