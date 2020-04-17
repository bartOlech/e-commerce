import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';

const Container = styled.div`   
    width: 80px;
    height: 40px;
    background-image: url('../../../static/backArrow.svg');
    background-repeat: no-repeat;
    background-size: 80px 40px;
    transform: rotate(180deg);
    cursor: pointer;
    margin-left: -12px;
    margin-top: -6px;
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