import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';

const Container = styled.div`   
    width: 90px;
    height: 45px;
    background-image: url('../../../static/backArrow.svg');
    background-repeat: no-repeat;
    background-size: 90px 45px;
    transform: rotate(180deg);
    cursor: pointer;
    margin-left: -12px;
    margin-top: 3px;
`

const BackButton = () => {
    const goToMainPage = () => {
        Router.push('/')
    }
    return (
        <Container data-testid='back-button' onClick={goToMainPage}>
        
        </Container>
    )
}

export default BackButton;