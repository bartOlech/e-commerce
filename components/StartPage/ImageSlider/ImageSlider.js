import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { FontStyle } from '../../../assets/style/style';
import Router from 'next/router'

const fadeInAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
    width: 100%;
    height: 250px;
`
const SliderBox = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    margin: auto;
`
const SlideOne = styled.div`
    width: 100%;
    height: 250px;
    background-image: url('../../../static/slideOne.jpg');
    background-repeat: no-repeat;
    background-size: 100% 250px;
    display: ${props => props.display};
    animation: 1s ${fadeInAnimation};
`
const SlideTwo = styled.div`
    width: 100%;
    height: 250px;
    background-image: url('../../../static/slideTwo.jpg');
    background-repeat: no-repeat;
    background-size: 100% 250px;
    display: ${props => props.display};
    animation: 1s ${fadeInAnimation};
`
const SlideThree = styled.div`
    width: 100%;
    height: 250px;
    background-image: url('../../../static/slideThree.jpg');
    background-repeat: no-repeat;
    background-size: 100% 250px;
    display: ${props => props.display};
    animation: 1s ${fadeInAnimation};
`
const Dots = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-left: -42px;
`
const Dot = styled.li`
    opacity: .8;
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin: 0 3px;
    background-color: #bbb;
    background-color: ${props => props.background};
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    &&:hover {
        background-color: #717171;
    }
    &&:active {
        background-color: #717171;
    }
`
const MoreInfoButton = styled.div`
    width: 190px;
    height: 40px;
    border: none;
    background-color: #3C3C3C;
    font-family: ${FontStyle.family};
    font-size: 1em;
    font-weight: 600;
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
    &&:hover {
        opacity: 1;
        background-color: #fb5c43;
    }
`

const ImageSlider = () => {
    const [counter, setCounter] = useState(0);
    const incrementValue = () => setCounter(counter + 1)

    // useEffect(() => {
    //     const interval = setInterval(incrementValue, 5000);
    //     if(counter === 3) {
    //         setCounter(0)
    //     }
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [counter])

    const getMoreInfo = () => {
        Router.push(`/moreInformation`)
    }
    

    return (
        <Container>
            <SliderBox>
                <SlideOne data-testid='slide' display={counter === 0 ? 'flex' : 'none'}></SlideOne>
                <SlideTwo display={counter === 1 ? 'flex' : 'none'}></SlideTwo>
                <SlideThree display={counter === 2 || counter === 3 ? 'flex' : 'none'}></SlideThree>
                <MoreInfoButton onClick={getMoreInfo}>Dowiedz się więcej</MoreInfoButton>
            </SliderBox>
            <Dots data-testid='dots'>
                <Dot background={counter === 0 ? '#717171' : '#bbb'}></Dot>
                <Dot background={counter === 1 ? '#717171' : '#bbb'}></Dot>
                <Dot background={counter === 2 || counter === 3 ? '#717171' : '#bbb'}></Dot>
            </Dots>

        </Container>
    )
}

export default ImageSlider;