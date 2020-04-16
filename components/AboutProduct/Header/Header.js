import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import Router from 'next/router'

const Container = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    background-color: #fff;
    z-index: 2;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 7px;
    background-color: #F5F5F5;
    position: absolute;
    bottom: 0;
`
const Logo = styled.div`
    font-size: 1.5em;
    padding-top: 30px;
    margin-left: 10px;
`
const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
`
const ReturnButton = styled.button`
    width: 125px;
    height: 35px;
    background-color: #272727;
    color: #fff;
    font-size: 1.3em;
    font-weight: 300;
    cursor: pointer;
    font-family: ${FontStyle.family};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-right: 5%;
    transition: .6s;
    outline: none;
    &&:hover {
        border: 1px solid #000;
        background-color: #fff;
        color: #000;
    }
`

const Header = () => {

    const goToMainPage = () => {
        Router.push(`/`)
    }

    return (
        <Container>
            <ButtonBox>
                <Logo>LOGO</Logo>
                <ReturnButton onClick={goToMainPage}>Powrót</ReturnButton>
            </ButtonBox>
           <HorizontalLine></HorizontalLine>
        </Container>
    )
}

export default Header;