import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { FontStyle } from '../../../../assets/style/style';

const Button = styled.div`
    width: 190px;
    height: 40px;
    border: none;
    background-color: ${FontStyle.logoColor};
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    font-weight: 300;
    cursor: pointer;
    outline: none;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    opacity: .9;
    transition: .5s;
    border: 1px solid ${FontStyle.logoColor};
    &&:hover {
        opacity: 1;
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
    @media (min-width: 1000px) {
        width: 250px;
        height: 50px;
    }
`

const LearnMoreBtn = () => {

    const getMoreInfo = () => {
        Router.push(`/about`)
    }

    return (
        <Button onClick={getMoreInfo}>Dowiedz się więcej</Button>
    )
}

export default LearnMoreBtn;