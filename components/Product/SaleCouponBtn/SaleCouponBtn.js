import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 32px;
    margin-top: 35px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 400;
    font-size: 1em;
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
    background-color: #FB5C43;
    font-size: .9em;
    cursor: pointer;
`

const SaleCouponBtn = () => {

    const getCoupon = () => {
        alert('Get coupon')
    }

    return (
        <Container onClick={getCoupon}>
            {/* <Text>TYLKO W TYM TYGODNIU</Text> */}
            <Button>ODBIERZ KUPON -10%</Button>
        </Container>
    )
}

export default SaleCouponBtn;