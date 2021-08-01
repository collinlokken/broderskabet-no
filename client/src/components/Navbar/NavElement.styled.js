import styled from 'styled-components';

export const StyledNavElement = styled.div`
    ul {
        display: ${({nonempty}) => nonempty ? "flex" : "none"};
        flex-direction: column;
        justify-content: flex-start;
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-top: 0.3rem;
    }
    li {
        background-color: ${({theme, toggle}) => toggle ? theme.secondaryLight : "blur(10px)"};
        padding: 0.3rem;
        opacity: ${({toggle}) => toggle ? "1" : "0.0"};
        transition: opacity 0.5s;
    }
    li:first-child {
        opacity: 1;
    }
    .sublink-container{
        width: fit-content;
        margin: auto;
    }
    z-index: 1;
`