import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header'
import EmptyBasket from './EmptyBasket'

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    height: 100%;
    background-color: #fff;
    position: fixed;
    z-index: 99;
    right: 0;
`

const Basket = () => {
    return (
        <Container>
            <Header></Header>
            


            {/* Conditional here */}
            {/* <EmptyBasket></EmptyBasket> */}
        </Container>
    )
}

export default Basket;