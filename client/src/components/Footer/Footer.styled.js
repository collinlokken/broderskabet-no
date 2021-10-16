import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: ${({theme}) => theme.secondaryLight};
    width: 100%;
    padding: 20px;
    align-items: center;

    @media (min-width: ${({theme}) => theme.mobile}) {
        flex-flow: column wrap;
        max-height: calc(6rem + 40px);
        .footer-text {
            position: relative;
            left: 25%;
        }
        .some-container {
            align-self: flex-end;
        }
    }
    
    .footer-text {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer-text div {
        height: 2rem;
    }

    .some-container {
        display: flex;
        width: 125px;
        justify-content: space-between;
    }

    .some-container a {
        color: ${({theme}) => theme.primaryDark};
    }

    .some-item {
        width: 50px;
        height: 50px;
        text-
    }

    .fab {
        font-size: 50px;
    }
`