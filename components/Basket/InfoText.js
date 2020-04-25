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
`
const OrderCost = styled.b`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: .95em;
    font-weight: 400;
    margin: 0 5px 0px 5px;
`
const Bold = styled.div`
    width: 90%;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.1em;
    font-weight: 400;
    margin-left: 4px;
    margin-right: 4px;
`

const InfoText = (props) => {
    const totalCostArr = [];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
        <Container >
            {props.products.map(el => {
                totalCostArr.push(+el.price)
            })}
            {totalCostArr.length > 0 ? (
                50 - totalCostArr.reduce(reducer) < 0 ? (
                    <Bold data-testid='free-delivery'>Na twoje zamówienie obowiązuje darmowa dostawa</Bold>
                ) : (
                    <Text>Jeszcze<OrderCost data-testid='not-free-delivery'>{50 - totalCostArr.reduce(reducer)}</OrderCost><OrderCost style={{margin: '0 5px 0 0'}}>zł</OrderCost>i skorzystasz z bezpłatnej dostawy.</Text>
                )
            ) : null}
            
           
        </Container>
    )
}

export default InfoText;