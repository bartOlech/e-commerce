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
    box-sizing: border-box;
    @media (min-width: 1000px) {
        align-items: flex-start;
       
    }
`
const ButtonsBoxPhone = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: 1px solid #F8AEA2;
    border-bottom: 1px solid #F8AEA2;
    @media (min-width: 1000px) {
       display: none;
    }
`
const ButtonsBoxDesktop = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 30px;
    @media (min-width: 1000px) {
        display: flex;
        width: 30%;
        justify-content: flex-start;
    }
`
const Button = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    background-color: ${props => props.background};
    border: none;
    border-bottom: ${props => props.borderBottom};
    outline: none;
    cursor: pointer;
    text-align: center;
    padding-top: 12px;
    transition: .1s;
    @media (min-width: 1000px) {
        width: 120px;
    }
`

const Products = () => {
    const[dimension, setDimension] = useState('all');
    const [products, setProducts] = useState(All)
    

    return (
        <Container>
         
            {/* Only desktop */}
            <ButtonsBoxDesktop>
                <Button onClick={() => {
                    setDimension('all')
                    setProducts(All)
                }} 
                    borderBottom={dimension === 'all' ? '3px solid #202020' : 'none'} 
                >Urodziny</Button>
                <Button onClick={() => {
                    setDimension('small')
                    setProducts(Small)
                }}
                    borderBottom={dimension === 'small' ? '3px solid #202020' : 'none'} 
                >Narodziny</Button>
                <Button onClick={() => {
                    setDimension('large')
                    setProducts(Large)
                }}
                    borderBottom={dimension === 'large' ? '3px solid #202020' : 'none'} 
                >Rocznica</Button>
            </ButtonsBoxDesktop>



            <ProductContainer products={products}></ProductContainer>
            
        </Container>
    )
}

export default Products;