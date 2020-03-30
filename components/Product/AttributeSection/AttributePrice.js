import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.div`
    font-family: ${FontStyle.family};
    color: #6E6E6E;
    font-size: 1.1em;
    font-weight: 300;
    margin-bottom: 3px;
`
const Price = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.3em;
    
`

const AttributePrice = (props) => {
    return (
        <Container>
           <Name>Cena</Name>
           <Price>{props.price} zł</Price>
        </Container>
    )
}

export default AttributePrice;