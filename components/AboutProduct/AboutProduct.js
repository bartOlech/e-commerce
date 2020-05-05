import React from 'react';
import styled from 'styled-components';
// import Header from './Header/Header';
import Header from '../Header/Header';
import MainSection from './MainSection/MainSection';
import HowItWorks from './MainSection/HowItWorks/HowItWorks';
import Footer from './Footer/Footer';
import Basket from '../Basket/Basket';
import BlurScreen from '../BlurScreen/BlurScreen';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f7f7;
`
const HorizontalLine = styled.div`
    width: 90%;
    height: 1px;
    background-color: #E4E7EB;
    @media (min-width: 1000px) {
        display: none
    }
`

const AboutProduct = () => {
    return (
        <Container>
            <BlurScreen></BlurScreen>
            <Basket></Basket>
            <Header></Header>
            <MainSection></MainSection>
            <HorizontalLine></HorizontalLine>
            <HowItWorks></HowItWorks>
            <Footer></Footer>
        </Container>
    )
}

export default AboutProduct;