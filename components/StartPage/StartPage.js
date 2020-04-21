import React from 'react';
import styled from 'styled-components';
// import { FontStyle } from '../../assets/style/style';
import Header from '../Header/Header';
import ImageSlider from './ImageSlider/ImageSlider';
import MainText from './MainText/MainText';
import Products from './Products/Products';
import Footer from './Footer/Footer';
import Basket from '../Basket/Basket';
import MenuLinks from './Menu/MenuLinks';
import BenefitsInfo from '../BenefitsInfo/BenefitsInfo';
import GoToShop from './Button/GoToShop';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    margin: ${props => props.margin};
`


const StartPage = () => {
    return (
        <Container>
            <Basket></Basket>
            <Header></Header>
            <ImageSlider></ImageSlider>
            <MenuLinks></MenuLinks>
            <MainText></MainText>
            <Products></Products>
            <GoToShop></GoToShop>
            <HorizontalLine margin='20px 0 0 0'></HorizontalLine>
            <BenefitsInfo margin='0 0 60px 0'></BenefitsInfo>
            <HorizontalLine margin='-45px 0 0 0'></HorizontalLine>
            <Footer></Footer>
        </Container>
    )
}

export default StartPage;