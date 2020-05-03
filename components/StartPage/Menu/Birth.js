import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    max-width: 330px;
    height: auto;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
    transition: .3s;
    box-shadow:
        0 0.2px 1.2px rgba(0, 0, 0, 0.038),
        0 0.5px 3.3px rgba(0, 0, 0, 0.055),
        0 1.2px 7.8px rgba(0, 0, 0, 0.072),
        0 4px 26px rgba(0, 0, 0, 0.11)
    ;
    &&:hover {
        box-shadow:
            0 0.2px 1.2px rgba(0, 0, 0, 0.07),
            0 0.5px 3.3px rgba(0, 0, 0, 0.1),
            0 1.2px 7.8px rgba(0, 0, 0, 0.13),
            0 4px 26px rgba(0, 0, 0, 0.2)
        ;
    }
    @media (min-width: 1000px) {
        margin: 0 30px 0 30px;
    }
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

const Birth = () => {
    return (
        <Container>
            <Img src='../../../static/MenuPictures/gadgets.jpg'></Img>
            <Button>NARODZINY</Button>
        </Container>
    )
}

export default Birth;