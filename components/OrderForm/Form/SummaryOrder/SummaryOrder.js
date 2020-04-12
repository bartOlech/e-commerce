import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import OrderCost from './OrderCost';
import DeliveryCost from './DeliveryCost';
import TotalCost from './TotalCost';

const Container = styled.div`
    margin: 20px 10px 20px 10px;

`
const HorizontalLine = styled.div`
    width: 100%;
    max-width: 450px;
    height: 1px;
    background-color: #AFAFAF;
`

const SummaryOrder = (props) => {
    return (
        <Container data-testid='summary-order-container'>
            <Tittle></Tittle>
            <OrderCost ordersAmount={`(1 produkt)`} orderPrice={props.orderPrice}></OrderCost>
            <DeliveryCost deliveryPrice='12 zł'></DeliveryCost>
            <HorizontalLine></HorizontalLine>
            <TotalCost orderPrice={props.orderPrice}></TotalCost>
        </Container>
    )
}

export default SummaryOrder;