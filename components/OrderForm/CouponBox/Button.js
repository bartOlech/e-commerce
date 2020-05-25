import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';

const Container = styled.button`
    width: 100px;
    height: 34px;
    background-color: rgba(251, 180, 98,1);
    color: #fff;
    font-family: ${FontStyle.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    margin-left: 10px;
    font-size: .8em;
    border-radius: 2px;
    outline: none;
`

const Button = (props) => {

    const useCoupon = () => {
        console.log(props.couponIsActivated)
        if(!props.couponIsActivated) {
            if(props.couponValue === '3e5XqPle') {
                props.getCoupon(0.1)
                props.checkCouponAlert(false)
            } else {
                props.checkCouponAlert(true)
            }
        } else {
            props.couponIsUsed(true)
        }
    }

    return (
        <Container type='button' onClick={useCoupon}>
            Użyj kuponu
        </Container>
    )
}

const mapStateToProps = state => ({
    couponValue: state.coupon.couponValue,
    couponIsActivated: state.price.couponIsActivated
})

export default connect(mapStateToProps)(Button);