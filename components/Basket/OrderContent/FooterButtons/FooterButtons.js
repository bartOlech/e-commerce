import React from 'react';
import styled from 'styled-components';
import ReturnToShopButton from './ReturnToShopButton';
import CheckoutButton from './CheckoutButton';

const Container = styled.div`
   width: 90%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 25px;
`

const FooterButtons = () => {
    return (
        <Container>
            <ReturnToShopButton></ReturnToShopButton>
            <CheckoutButton></CheckoutButton>
        </Container>
    )
}

export default FooterButtons;