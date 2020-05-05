import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style'
import Router from 'next/router';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const PhoneImg = styled.img`
    width: 100%;
    height: auto;
    filter: grayscale(40%) brightness(60%);
    @media (min-width: 1000px) {
        display: none;
    }
`
const DesktopImg = styled.img`
    width: 100%;
    height: auto;
    filter: grayscale(40%) brightness(60%);
    display: none;
    @media (min-width: 1000px) {
        display: inline;
    }
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    font-size: 2.1em;
    font-weight: 300;
    color: #fff;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 700px) {
        font-size: 3em;
        top: 63%;
    }
`
const Button = styled.button`
    width: 220px;
    height: 45px;
    border: none;
    background-color: #fff;
    font-style: ${FontStyle.family};
    color: #0A0D12;
    font-size: 1.3em;
    font-weight: 300;
    position: absolute;
    top: 77%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    transition: .6s;
    @media (min-width: 700px) {
        width: 300px;
        height: 55px;
        font-size: 1.4em;
    }
`

const Image = () => {
    return (
        <Container>
            <PhoneImg src='../../../../static/AboutPhoto/footer-image.jpg'></PhoneImg>
            <DesktopImg src='../../../../static/AboutPhoto/fotter-image-desktop.png'></DesktopImg>
            <Text>Skomponuj swoją kartkę</Text>
            <Button onClick={() => Router.push('/')}>Przejdź do sklepu</Button>
        </Container>
    )
}

export default Image;