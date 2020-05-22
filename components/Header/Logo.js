import React from 'react';
import styled from 'styled-components';
import Router from 'next/router'

const Conatiner = styled.div`
    width: 140px;
    height: 70px;
    z-index: 2;
    background-image: url('../../static/Logo/logo.svg');
    background-repeat: no-repeat;
    background-size: 140px 70px;
    margin-top: -20px;
    cursor: pointer;
    @media (max-width: 1000px) {
        width: 100px; 
        background-size: 100px 70px;
    }
`

const Logo = () => {

    const goToHomePage = () => {
        Router.push('/')
    }

    return (
        <Conatiner onClick={goToHomePage}>
            
        </Conatiner>
    )
}

export default Logo;