import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
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

const TotalCost = (props) => {

    const sumCost = (charge, delivery) => +charge + +delivery;

    return (
        <Container>
            <Text>Razem</Text>
            <Price data-testid='total-price'>{sumCost(props.orderPrice, props.price)} zł</Price>
        </Container>
    )
}

const mapStateToProps = state => ({
    price: state.delivery.price
})

export default connect(mapStateToProps)(TotalCost);