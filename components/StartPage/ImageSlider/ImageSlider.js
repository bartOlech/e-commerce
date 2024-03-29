import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import LearnMore from './LearnMore/LearnMore';

const fadeInAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    /* max-width: 1000px; */
    margin-bottom: 100px;
`
const SliderBox = styled.div`
    width: 100%;
    /* height: auto; */
    position: relative;
    margin: auto;
`
const SlideOne = styled.img`
    width: 100%;
    /* height: auto; */

    background-repeat: no-repeat;
    /* background-size: cover; */
    display: ${props => props.display};
    animation: 1s ${fadeInAnimation};
`
const SlideTwo = styled.img`
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-size: 100% 250px;
    display: ${props => props.display};
    animation: 1s ${fadeInAnimation};
`
const SlideThree = styled.img`
    width: 100%;
    height: auto;
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
const SliderPhone = styled.div`
    @media (max-width: 1000px) {
        display: inline
    }
    @media (min-width: 1000px) {
        display: none
    }
`
const SliderDesktop = styled.div`
    @media (max-width: 1000px) {
        display: none
    }
    @media (min-width: 1000px) {
        display: inline
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
    

    return (
        <Container>
            {/* Phone */}
            <SliderPhone>
                <SliderBox>
                    <SlideOne src='../../../static/PhoneSlider/slideOne.jpg' data-testid='slide' display={counter === 0 ? 'flex' : 'none'}></SlideOne>
                    <SlideTwo src='../../../static/slideTwo.jpg' display={counter === 1 ? 'flex' : 'none'}></SlideTwo>
                    <SlideThree src='../../../static/slideThree.jpg' display={counter === 2 || counter === 3 ? 'flex' : 'none'}></SlideThree>
                </SliderBox>
            </SliderPhone>
            {/* Desktop */}
            <SliderDesktop>
                <SliderBox>
                    <SlideOne src='../../../static/DesktopSlider/slideOne.png' data-testid='slide' display={counter === 0 ? 'flex' : 'none'}></SlideOne>
                    <SlideTwo src='../../../static/slideTwo.jpg' display={counter === 1 ? 'flex' : 'none'}></SlideTwo>
                    <SlideThree src='../../../static/slideThree.jpg' display={counter === 2 || counter === 3 ? 'flex' : 'none'}></SlideThree>
                </SliderBox>
            </SliderDesktop>
            <Dots data-testid='dots'>
                <Dot background={counter === 0 ? '#717171' : '#bbb'}></Dot>
                <Dot background={counter === 1 ? '#717171' : '#bbb'}></Dot>
                <Dot background={counter === 2 || counter === 3 ? '#717171' : '#bbb'}></Dot>
            </Dots>
            <LearnMore></LearnMore>

        </Container>
    )
}

export default ImageSlider;