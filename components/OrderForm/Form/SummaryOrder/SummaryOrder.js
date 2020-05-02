import React, { useState } from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import OrderCost from './OrderCost';
import DeliveryCost from './DeliveryCost';
import TotalCost from './TotalCost';
import Name from './Name';
import { connect } from 'react-redux'

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

    let productCounter = 0;
    let productPrice = 0;

    return (
        <Container data-testid='summary-order-container'>
            <Tittle></Tittle>
            {props.product.map((el, index) => {
                productCounter++
                productPrice += +el.price;

                return (
                    <Name quantity={el.quantity} date={el.date} image={el.image} name={el.name} size={el.size} key={index}></Name>
                )
            })}
            <OrderCost orderPrice={productPrice}></OrderCost>
            <DeliveryCost deliveryPrice='12 zł'></DeliveryCost>
            <HorizontalLine></HorizontalLine>
            <TotalCost orderPrice={productPrice}></TotalCost>
        </Container>
    )
}

const mapStateToProps = state => ({
    product: state.product.products
})

export default connect(mapStateToProps)(SummaryOrder);