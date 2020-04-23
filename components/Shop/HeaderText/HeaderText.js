import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import Text from './Text';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    margin-top: 25px;
    margin-bottom: -20px;
`

const HeaderText = (props) => {
    return (
        <Container>
            <Tittle tittle={props.tittle}></Tittle>
            <Text text={props.text}>
            </Text>
            <HorizontalLine></HorizontalLine>
        </Container>
    )
}

export default HeaderText;