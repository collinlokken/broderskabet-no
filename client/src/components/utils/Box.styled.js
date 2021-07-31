import styled from 'styled-components';
import B_sort from '../../img/B_sort.png'

export const StyledImage = styled.div`
    background-image: url(${B_sort});
    background-position: center;
    background-size: cover;
    border: 1px solid black;
    margin: 0 auto;
    width: 9vw;
    height: 9vw;
    @media (max-width: ${({theme})=> theme.mobile}) {
        width: 25vw;
        height: 25vw;
    }
    `
    
export const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    .group-title {
        text-align: center;
        max-width: 25vw;
        text-overflow: clip;
        height: 3rem;
        color: ${({ theme }) => theme.primaryDark};
    }
    .group-title span{
        margin: 0;
    }
    a {
        text-decoration: none; 
    }
`