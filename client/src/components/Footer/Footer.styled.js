import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: ${({theme}) => theme.secondaryLight};
    width: 100%;
    padding: 20px;
    align-items: center;
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
        width: 100px;
        justify-content: space-between;
    }
    
    .some-container a {
        color: ${({theme}) => theme.primaryDark};
    }
    
    i { /*fontawesome icons*/
        font-size: 35px;
    }

    @media (min-width: ${({theme}) => theme.mobile}) {
        flex-flow: row nowrap;
        justify-content: space-between;
        .footer-text {
            position: relative;
            width: 30%;
            left: calc(50% - 15%); 
        }
        .some-container {
            width: 125px;
        }

        i {
            font-size: 50px;
        }
    }
    `