import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.button`
    width: 100px;
    height: 34px;
    background-color: ${FontStyle.logoColor};
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
        props.getCoupon(0.1)
    }

    return (
        <Container type='button' onClick={useCoupon}>
            Użyj kuponu
        </Container>
    )
}
export default Button;