import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const AboutProduct = () => {
    return (
        <Container>
            <Header></Header>
            <MainSection></MainSection>
        </Container>
    )
}

export default AboutProduct;