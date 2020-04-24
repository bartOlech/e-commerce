import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import ProductContainer from './Product/ProductContainer';
// frames data
import { Small } from '../../../assets/FramesData/Small';
import { All } from '../../../assets/FramesData/All';
import { Large } from '../../../assets/FramesData/Large';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
`
const ButtonsBox = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: 1px solid #F8AEA2;
    border-bottom: 1px solid #F8AEA2;
`
const Button = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    background-color: ${props => props.background};
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    padding-top: 12px;
    transition: .4s;
    &&:hover {
        background-color: #FF8D7B;
        color: #fff;
    }
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
                    color={dimension === 'all' ? '#fff' : '#141414'} 
                    background={dimension === 'all' ? '#fb5c43' : '#fff'}
                >Urodziny</Button>
                <Button onClick={() => {
                    setDimension('small')
                    setProducts(Small)
                }}
                    color={dimension === 'small' ? '#fff' : '#141414'} 
                    background={dimension === 'small' ? '#fb5c43' : '#fff'}
                >Narodziny</Button>
                <Button onClick={() => {
                    setDimension('large')
                    setProducts(Large)
                }}
                    color={dimension === 'large' ? '#fff' : '#141414'} 
                    background={dimension === 'large' ? '#fb5c43' : '#fff'}
                >Rocznica</Button>
            </ButtonsBox>
            <ProductContainer products={products}></ProductContainer>
            
        </Container>
    )
}

export default Products;