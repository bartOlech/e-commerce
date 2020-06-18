import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import BasketSize from './BasketSize';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 15px;
`

const InfoBox = (props) => {
    return (
        <Container>
            <Tittle name={props.name}></Tittle>
            <BasketSize productWithFrame={props.productWithFrame} size={props.size} id={props.id}></BasketSize>
        </Container>
    )
}

export default InfoBox;