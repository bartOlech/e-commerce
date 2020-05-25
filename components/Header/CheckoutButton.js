import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../assets/style/style';

const Button = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    background-color: ${FontStyle.logoColor};
    font-family: ${FontStyle.family};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
    position: absolute;
    right: 10px;
    top: 13px;
    font-weight: 300;
    cursor: pointer;
    outline: none;
    transition: .3s;
    border: 1px solid ${FontStyle.logoColor};
    display: none;
    &&:hover {
        border: 1px solid ${FontStyle.color};
        color: #000;
        background-color: #fff;
    }
    @media (min-width: 800px) {
        display: inline
    }
`

const CheckoutButton = () => {
    return (
        <Button>
            KASA
        </Button>
    )
}

export default CheckoutButton;