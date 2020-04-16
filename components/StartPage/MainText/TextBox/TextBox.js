import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import MainText from './MainText';
import Line from './Line';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin: 5px 0 25px 0;
`

const TextBox = () => {
    return (
        <Container>
            <Tittle></Tittle>
            <Line></Line>
            <MainText></MainText>
        </Container>
    )
}

export default TextBox;