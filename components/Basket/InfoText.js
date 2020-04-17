import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../assets/style/style';

const Container = styled.div`
    display: flex;
    justify-content: center;

`
const Text = styled.b`
    width: 90%;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.1em;
    font-weight: 300;
    display: flex;
    /* padding-left: 15px;
    @media (min-width: 350px) {
        padding-left: 25px;
        padding-right: 25px;
    }
    @media (min-width: 350px) {
        padding-left: 35px;
        padding-right: 25px;
    } */
    /* margin-top: 10px; */
`
const OrderCost = styled.b`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: .95em;
    font-weight: 400;
    margin: 0 5px 0px 5px;
`

const InfoText = () => {
    return (
        <Container>
            <Text>Jeszcze<OrderCost>23.3</OrderCost><OrderCost style={{margin: '0 5px 0 0'}}>zł</OrderCost>i skorzystasz z bezpłatnej dostawy.</Text>
        </Container>
    )
}

export default InfoText;