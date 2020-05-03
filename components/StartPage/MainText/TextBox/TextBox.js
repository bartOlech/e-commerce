import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import MainText from './MainText';
import Line from './Line';

const Container = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   margin-top: 5px;
   margin-bottom: 25px;
   @media (min-width: 400px) {
        padding-left: 20px;
    }
    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-around;
        width: 95%;
        align-items: center;
    }
`
const PhoneBox = styled.div`
    width: 100%;
    @media (min-width: 1000px) {
        width: 50%;
    }
`
const PhoneDesktopBox = styled.div`
    display: none;
    height: 390px;
    @media (min-width: 1000px) {
        display: inline;
        width: 50%;
        margin-left: 25px;
    }
`
const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 600px;
    box-shadow:
        0 0.2px 1.2px rgba(0, 0, 0, 0.038),
        0 0.5px 3.3px rgba(0, 0, 0, 0.055),
        0 1.2px 7.8px rgba(0, 0, 0, 0.072),
        0 4px 26px rgba(0, 0, 0, 0.11)
    ;
`

const TextBox = () => {
    return (
        <Container>
            <PhoneBox>
                <Tittle></Tittle>
                <Line></Line>
                <MainText></MainText>
            </PhoneBox>
            {/* display only if width > 1000px */}
            <PhoneDesktopBox>
                <Img src='../../../../static/textBox-photo.jpg'></Img>
            </PhoneDesktopBox>
            
        </Container>
    )
}

export default TextBox;