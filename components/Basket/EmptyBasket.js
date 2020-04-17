import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../assets/style/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50%;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.2em;
    font-weight: 400;
    text-align: center;
    margin-top: 10px;
`
const Ico = styled.div`
    width: 50px;
    height: 50px;
    background-image: url('../../static/basket.svg');
    background-repeat: no-repeat;
    background-size: 50px 50px;
`

const EmptyBasket = () => {
    return (
        <Container>
            <Ico></Ico>
            <Text>Twój koszyk jest pusty</Text>
        </Container>
    )
}

export default EmptyBasket;