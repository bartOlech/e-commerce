import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import Router from 'next/router'

const Container = styled.div`
    width: 100%;
    max-width: 330px;
    height: auto;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 50px;
`
const Img = styled.img`
    width: 100%;
    max-width: 330px;
    height: auto;
   
`
const Button = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    background-color: #fff;
    color: #000;
    font-family: ${FontStyle.family};
    font-weight: 300;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: .9em;
    cursor: pointer;
    border: 1px solid #fff;
    transition: .4s;
    outline: none;
    &&:hover {
        border: 1px solid #6F7982;
    }
`

const ClassicCard = () => {

    const goToShopSection = () => {
        Router.push('/cardshop')
    }
    
    return (
        <Container>
            <Img src='../../../static/MenuPictures/shop.jpg'></Img>
            <Button onClick={goToShopSection}>KLASYCZNA KARTKA</Button>
        </Container>
    )
}

export default ClassicCard;