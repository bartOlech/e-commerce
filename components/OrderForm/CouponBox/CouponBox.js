import React from 'react';
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
`
const Form = styled.div`
    display: flex;
`

const CouponBox = (props) => {

    const getCoupon = (value) => {
        props.getCoupon(value)
    }

    return (
        <Container>
            <Text>Posiadasz kupon? Użyj go tutaj</Text>
            <Form>
                <Input></Input>
                <Button getCoupon={getCoupon}></Button>
            </Form>
        </Container>
    )
}
export default CouponBox;