import styled from 'styled-components';

export const StyledImage = styled.div`
    background-image: url(${({thumbnail}) => thumbnail});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: 1px solid #00000029;
    box-shadow: 0 15px 12px -12px #00000026;
    margin: 0 auto;
    width: 9vw;
    height: 9vw;
    @media (max-width: ${({theme})=> theme.mobile}) {
        width: 25vw;
        height: 25vw;
    }
    &:hover {
        background-color: ${({ theme }) => theme.secondaryLight};
    }
    transition: background-color 0.2s;
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