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
    margin-top: 35px;
    position: relative;
`

const ProductContainer = (props) => {

    return (
        <Container>
            {Object.values(props.products).map((val, index) => {
              
             return (
                <Product 
                    margin='10px 10px 30px 10px' 
                    id={val.productId} 
                    hoverImage={val.hoverImage}
                    type={val.type}  
                    key={index} 
                    image={val.image} 
                    name={val.name} 
                    size={val.size} 
                    price={val.price}></Product>
            )
          })}
        </Container>
    )
}

export default ProductContainer;