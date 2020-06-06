import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product/Product';
import Carousel from '@brainhubeu/react-carousel';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 35px;
    position: relative;
    margin-bottom: 50px;
`

const ProductContainer = (props) => {
 

    return (
        <Container>
             <Carousel 
                arrows 
                slidesPerPage={5}
                infinite
                breakpoints={{
                    500: {
                        slidesPerPage: 1,
                        arrows: true
                      },
                    800: {
                      slidesPerPage: 2,
                      arrows: true
                    },
                    1000: {
                      slidesPerPage: 4,
                      arrows: true
                    },
                    1200: {
                        slidesPerPage: 5,
                        arrows: true
                      }
                  }}
             >
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
      </Carousel>
           
        </Container>
    )
}

export default ProductContainer;