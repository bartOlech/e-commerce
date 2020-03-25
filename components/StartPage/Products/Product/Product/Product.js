import React from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductText from './ProductText/ProductText';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    width: 160px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px 30px 10px;
    position: relative;
    cursor: pointer;
    transition: 1s;
`

const Product = (props) => {
    return (
        <Container>
            <ProductImage hoverImage={props.hoverImage} image={props.image}></ProductImage>
            <ProductText name={props.name} size={props.size} price={props.price}></ProductText>
        </Container>
    )
}

export default Product;