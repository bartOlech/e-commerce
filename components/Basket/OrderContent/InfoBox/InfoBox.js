import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import Quantity from './Quantity';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
`

const InfoBox = (props) => {
    return (
        <Container>
            <Tittle name={props.name}></Tittle>
            <Quantity id={props.id} quantity={props.quantity}></Quantity>
        </Container>
    )
}

export default InfoBox;