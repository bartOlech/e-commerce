import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -5px;
    margin-bottom: 40px;
`

const Button = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 60px;
    border: none;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.6em;
    background-color: #1C1C1C;
    font-weight: 300;
    text-align: center;
    padding-top: 13px;
    cursor: pointer;
`

const BuyButton = () => {
    return (
        <Container>
            <Button>Zamów teraz</Button>
        </Container>
    )
}

export default BuyButton;