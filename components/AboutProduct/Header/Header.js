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
    background-color: #EAEAEA;
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
const ReturnButton = styled.div`
    width: 100px;
    height: 35px;
    border-radius: 3px;
    background-color: #EB482F;
    cursor: pointer;
    font-family: ${FontStyle.family};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-right: 5%;
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