import React from 'react';
import styled from 'styled-components';
import Header from '../Product/Header/Header';
import Product from '../StartPage/Products/Product/Product/Product';
// In the future getting from database
import { All as AllData } from '../../assets/FramesData/All';
import HeaderText from './HeaderText/HeaderText';

const Container = styled.div`
   
`
const ProductSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
`

const CardShop = () => {
    return (
        <Container>
            <Header background='#fff'></Header>
            <HeaderText></HeaderText>
            <ProductSection>
                {AllData.map((val, index) => {
                    return (
                        <Product margin='0px 20px 20px 20px' id={val.id} hoverImage={val.hoverImage} key={index} image={val.image} name={val.name} size={val.size} price={val.price}></Product>
                    )
                })}
            </ProductSection>
        </Container>
    )
}

export default CardShop;