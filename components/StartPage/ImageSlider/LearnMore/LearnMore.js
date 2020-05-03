import React from 'react';
import styled from 'styled-components';
import LearnMoreBtn from './LearnMoreBtn';
import UpperText from './UpperText';
import MainText from './MainText';

const Container = styled.div`
    width: 75%;
    max-width: 500px;
    height: 180px;
    background-color: #fff;
    position: absolute;
    bottom: -100px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(222, 224, 227, .1);
    @media (min-width: 1000px) {
        max-width: 750px;
        height: 230px;
    }
`

const LearnMore = () => {
    return (
        <Container>
            <UpperText></UpperText>
            <MainText></MainText>
            <LearnMoreBtn></LearnMoreBtn>
        </Container>
    )
}

export default LearnMore;