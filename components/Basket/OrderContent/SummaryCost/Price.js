import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: .96em;
    font-weight: 400;
    margin-top: 1px;
`

const Price = (props) => {
    const totalCostArr = [];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
        <Container>
            {props.products.map(el => {
                totalCostArr.push(+el.price)
            })}
            {totalCostArr.length > 0 ? totalCostArr.reduce(reducer) : null} zł
        </Container>
    )
}

export default Price;