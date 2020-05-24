import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'

const Container = styled.div`
    display: flex;
    width: 230px;
    flex-direction: column;
    align-items: left;
    margin-left: 32px;
    margin-top: 35px;
    @media (max-width: 400px) {
        margin-left: 10px;
    }
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    font-size: .9em;
    text-align: center;
    padding-bottom: 5px;
`
const Button = styled.button`
    width: 230px;
    height: 40px;
    border: none;
    color: #fff;
    font-family: ${FontStyle.family};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FBAF62;
    font-size: .9em;
    outline: none;
    cursor: pointer;
`
const Coupon = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1em;
    color: ${FontStyle.color};
    font-weight: 300;
    display: ${props=>props.display};
    text-align: center;
    padding-top: 5px;
`

const SaleCouponBtn = () => {
    const [coupon, showCoupon] = useState(false);

    const getCoupon = () => {
        showCoupon(true);
    }

    return (
        <Container onClick={getCoupon}>
            {/* <Text>Kupon na pierwsze zamówienie!!!</Text> */}
            <Button>Odbierz -10% na pierwsze zamówienie</Button>
            <Coupon display={coupon ? 'inline' : 'none'}>Twój kupon: 3e5XqPle</Coupon>
        </Container>
    )
}

export default SaleCouponBtn;