import React from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductText from './ProductText/ProductText';
import styled, { keyframes } from 'styled-components';
import Router from 'next/router'

const Container = styled.div`
    width: 160px;
    height: 350px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin: ${props => props.margin};
    position: relative;
    cursor: pointer;
    transition: 1s;
`

const Product = (props) => {

    const handleProduct = (id) => {
        Router.push({
            pathname: '/product',
            query: { 
                id,
                type: props.type
             },
        })
    }

    return (
        <Container margin={props.margin} onClick={() => {handleProduct(props.id)}}>
            <ProductImage hoverImage={props.hoverImage} image={props.image}></ProductImage>
            <ProductText name={props.name} size={props.size} price={props.price}></ProductText>
        </Container>
    )
}

export default Product;