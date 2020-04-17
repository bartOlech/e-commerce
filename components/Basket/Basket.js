import React from 'react';
import styled, { keyframes }  from 'styled-components';
// Don't remove!!!
import EmptyBasket from './EmptyBasket'
import Header from './Header/Header'
import InfoText from './InfoText';
import OrderContent from './OrderContent/OrderContent';
import { connect } from 'react-redux';
import { fadeInRight } from 'react-animations'

const bounceAnimation = keyframes`${fadeInRight}`;

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    height: 100%;
    background-color: #fff;
    position: fixed;
    z-index: 99;
    right: 0;
    display: ${props => props.display};
    animation: .5s ${bounceAnimation};
`

const Basket = (props) => {
    return (
        <Container display={props.isVisible ? 'inline' : 'none'}>
            <Header></Header>
            <InfoText></InfoText>
            <OrderContent></OrderContent>


            {/* Conditional here */}
            {/* <EmptyBasket></EmptyBasket> */}
        </Container>
    )
}

const mapStateToProps = state => ({
    isVisible: state.basket.isVisible
})

export default connect(mapStateToProps)(Basket);