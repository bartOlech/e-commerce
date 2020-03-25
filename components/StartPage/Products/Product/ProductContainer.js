import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product/Product';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 70px;
`

const ProductContainer = (props) => {

    return (
        <Container>
            {props.products.map((val, index) => {
                return (
                    <Product key={index} image={val.image} name={val.name} size={val.size} price={val.price}></Product>
                )
            })}
        </Container>
    )
}

export default ProductContainer;