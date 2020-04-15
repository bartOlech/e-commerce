import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
`
const Text = styled.div`
    display: flex;
`
const StaticText = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
`
const AmountOfOrders = styled.div`
    font-family: ${FontStyle.family};
    color: #A8A8A8;
`
const Price = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
`

const OrderCost = (props) => {
    return (
        <Container>
            <Text>
                <StaticText>Koszt zamówienia</StaticText>
                <AmountOfOrders>{props.ordersAmount} </AmountOfOrders>
            </Text>
            <Price>{props.orderPrice} zł</Price>
        </Container>
    )
}

export default OrderCost;