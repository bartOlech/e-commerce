import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import Router from 'next/router'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    width: 270px;
    height: 50px;
    font-family: ${FontStyle.family};
    color: #fff;
    background-color: ${FontStyle.logoColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${FontStyle.logoColor};
    font-size: 1.3em;
    font-weight: 300;
    margin-top: -35px;
    cursor: pointer;
    transition: .5s;
    z-index: 3;
    &&:hover {
        background-color: #fff;
        border: 1px solid ${FontStyle.color};
        color: #000;
    }
`

const GoToShop = () => {
    const goToShop = () => {
        Router.push('/shop')
    }

    return (
        <Container>
            <Button onClick={goToShop}>Przejdź do sklepu</Button>
        </Container>
    )
}

export default GoToShop;