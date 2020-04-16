import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';
import HowItWorks from './MainSection/HowItWorks/HowItWorks';
import Footer from './Footer/Footer';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HorizontalLine = styled.div`
    width: 90%;
    height: 1px;
    background-color: #E4E7EB;

`

const AboutProduct = () => {
    return (
        <Container>
            <Header></Header>
            <MainSection></MainSection>
            <HorizontalLine></HorizontalLine>
            <HowItWorks></HowItWorks>
            <Footer></Footer>
        </Container>
    )
}

export default AboutProduct;