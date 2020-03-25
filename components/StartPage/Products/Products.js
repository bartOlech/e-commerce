import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import ProductContainer from './Product/ProductContainer';
// frames data
import { Small } from '../../../assets/FramesData/Small';
import { All } from '../../../assets/FramesData/All';
import { Large } from '../../../assets/FramesData/Large';

import Product from './Product/Product/Product'

const Container = styled.div`
    width: 100%;
    height: 65px;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`
const ButtonsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Button = styled.div`
    width: 120px;
    height: 29px;
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    background-color: ${props => props.background};
    border: none;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    text-align: center;
    padding-top: 7px;
    margin-top: 14px;
    transition: .3s;
`

const Products = () => {
    const[dimension, setDimension] = useState('all');
    const [products, setProducts] = useState(All)
    

    return (
        <Container>
            <ButtonsBox>
                <Button onClick={() => {
                    setDimension('all')
                    setProducts(All)
                }} 
                    color={dimension === 'all' ? '#fff' : '#808080'} 
                    background={dimension === 'all' ? '#FB5C43' : '#F7F7F7'}
                >Wszystkie</Button>
                <Button onClick={() => {
                    setDimension('small')
                    setProducts(Small)
                }}
                    color={dimension === 'small' ? '#fff' : '#808080'} 
                    background={dimension === 'small' ? '#FB5C43' : '#F7F7F7'}
                >Mała</Button>
                <Button onClick={() => {
                    setDimension('large')
                    setProducts(Large)
                }}
                    color={dimension === 'large' ? '#fff' : '#808080'} 
                    background={dimension === 'large' ? '#FB5C43' : '#F7F7F7'}
                >Duża</Button>
            </ButtonsBox>
            <ProductContainer products={products}></ProductContainer>
            
        </Container>
    )
}

export default Products;