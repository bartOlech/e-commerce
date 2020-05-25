import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1em;
    color: #3B475A;
    padding-bottom: 5px;
    display: ${props => props.display};
`
const Form = styled.div`
    display: flex;
`

const CouponBox = (props) => {
    const [couponAlert, setCouponAlert] = useState(false)
    const [couponIsClicked, setCouponIsClicked] = useState(false)
    const [usedCoupon, setUsedCoupon] = useState(false)

    const getCoupon = (value) => {
        props.getCoupon(value)
    }
    const checkCouponAlert = (val) => {
        setCouponIsClicked(true)
        setCouponAlert(val)
    }
    const couponIsUsed = (val) => {
        setUsedCoupon(val)
    }

    return (
        <Container>
            <Text display='inline'>Posiadasz kupon? Użyj go tutaj</Text>
            <Form>
                <Input></Input>
                <Button couponIsUsed={couponIsUsed} checkCouponAlert={checkCouponAlert} getCoupon={getCoupon}></Button>
            </Form>
            <Text display={couponAlert ? 'inline' : 'none'} style={{color: '#CC3300'}}>
                Błędny kupon
            </Text>
            <Text display={!couponAlert && couponIsClicked ? 'inlie' : 'none'} style={{color: 'green'}}>
                Kupon został aktywowany
            </Text>
            <Text display={usedCoupon? 'inlie' : 'none'} style={{color: '#CC3300'}}>
                Kupon został już użyty
            </Text>
        </Container>
    )
}
export default CouponBox;