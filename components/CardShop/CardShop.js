import React from 'react';
import styled from 'styled-components';
import Header from '../Product/Header/Header';
import Product from '../StartPage/Products/Product/Product/Product';
// In the future getting from database
import { All as AllData } from '../../assets/FramesData/All';
import HeaderText from './HeaderText/HeaderText';
import BenefitsInfo from '../BenefitsInfo/BenefitsInfo';
import Copyright from '../StartPage/Footer/Copyright/Copyright';

const Container = styled.div`
   
`
const ProductSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    margin-top: -35px;
    margin-bottom: 10px;
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
            <HorizontalLine></HorizontalLine>
            <BenefitsInfo margin='0 0 30px 0'></BenefitsInfo>
            <Copyright></Copyright>
        </Container>
    )
}

export default CardShop;