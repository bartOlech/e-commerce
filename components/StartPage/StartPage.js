import React from 'react';
import styled from 'styled-components';
// import { FontStyle } from '../../assets/style/style';
import Header from '../Header/Header';
import ImageSlider from './ImageSlider/ImageSlider'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const StartPage = () => {
    return (
        <Container>
            <Header></Header>
            <ImageSlider></ImageSlider>
        </Container>
    )
}

export default StartPage;