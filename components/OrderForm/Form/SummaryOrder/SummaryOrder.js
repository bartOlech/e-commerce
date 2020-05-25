import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import OrderCost from './OrderCost';
import DeliveryCost from './DeliveryCost';
import TotalCost from './TotalCost';
import Name from './Name';
import { connect } from 'react-redux';
import CouponBox from '../../CouponBox/CouponBox';
import { setTotalPrice } from '../../../../redux/actions/Basket/setTotalPrice';
import { setClearPrice } from '../../../../redux/actions/Basket/setClearPrice';
import { setCoupon } from '../../../../redux/actions/Coupon/setCoupon';

const Container = styled.div`
    margin: 20px 10px 20px 10px;
    max-width: 550px;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #AFAFAF;
`

const SummaryOrder = (props) => {

    const getCoupon = (value) => {
        props.setCoupon(0.9)
    }

    useEffect(() => {
        // reset total price
        props.setClearPrice();

        props.product.map((el, index) => {
            props.setTotalPrice(+el.price)
        })
    }, [])

    return (
        <Container data-testid='summary-order-container'>
            <Tittle></Tittle>
            {props.product.map((el, index) => {
                return (
                    <Name quantity={el.quantity} date={el.date} image={el.image} name={el.name} size={el.size} key={index}></Name>
                )
            })}
            <OrderCost orderPrice={props.totalPrice}></OrderCost>
            <DeliveryCost></DeliveryCost>
            <HorizontalLine></HorizontalLine>
            <TotalCost orderPrice={props.totalPrice}></TotalCost>
            <CouponBox getCoupon={getCoupon}></CouponBox>
        </Container>
    )
}

const mapStateToProps = state => ({
    product: state.product.products,
    totalPrice: state.price.totalPrice
})

const mapDispatchToProps = {
    setTotalPrice,
    setClearPrice,
    setCoupon
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryOrder);