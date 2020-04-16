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
const Img = styled.img`
    width: 100%;
    height: auto;
    filter: grayscale(50%) brightness(50%);
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
`
const Button = styled.button`
    width: 210px;
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
    &&:hover {
        background-color: #272727;
        color: #fff;
    }
`

const Image = () => {
    return (
        <Container>
            <Img src='../../../../static/slideThree.jpg'></Img>
            <Text>Skomponuj swoją kartkę</Text>
            <Button onClick={() => Router.push('/')}>Przejdź do sklepu</Button>
        </Container>
    )
}

export default Image;