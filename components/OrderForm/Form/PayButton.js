import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Button = styled.div`
    width: 290px;
    height: 55px;
    font-family: ${FontStyle.family};
    color: #fff;
    background-color: #FB5C43;
    border: none;
    border-radius: 8px;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 50px;
    font-size: 1.3em;
    cursor: pointer;
`

const PayButton = () => {
    return (
        <Button>Przejdź do płatności</Button>
    )
}

export default PayButton