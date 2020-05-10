import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    max-width: 550px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
`
const Price = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
`

const DeliveryCost = (props) => {
    return (
        <Container>
            <Text>Koszt wysyłki</Text>
            <Price data-testid='price'>{props.price} zł</Price>
        </Container>
    )
}

const mapStateToProps = state => ({
    delivery: state.delivery.delivery,
    price: state.delivery.price
})

export default connect(mapStateToProps)(DeliveryCost);