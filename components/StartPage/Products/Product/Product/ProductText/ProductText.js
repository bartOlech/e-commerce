import React from 'react';
import styled from 'styled-components';
import Name from './Name';
import Size from './Size';
import Price from './Price';

const Container = styled.div`
    margin-top: 220px;
`

const ProductText = (props) => {
    return (
        <Container>
            <Name name={props.name}></Name>
            <Size size={props.size}></Size>
            <Price price={props.price}></Price>
        </Container>
    )
}

export default ProductText;