import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import Price from './Price';

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0 10px 0;
`

const SummaryCost = (props) => {
    return (
        <Container>
            <Tittle></Tittle>
            <Price products={props.products}></Price>
        </Container>
    )
}

export default SummaryCost;