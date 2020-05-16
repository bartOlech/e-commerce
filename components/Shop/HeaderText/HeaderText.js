import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import Text from './Text';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const HorizontalLineBox = styled.div`
    width: 100%;
    height: 1px; 
    display: flex;
    justify-content: space-between;  
    margin-top: 10px;
    margin-bottom: 12px;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    margin-top: 25px;
    margin-bottom: -20px;
`
const LineText = styled.div`
   margin-top: 12px;
   padding-left: 30px;
   padding-right: 30px;
   font-family: ${FontStyle.family};
   color: #A8A9AC;
   font-weight: 100;
   font-size: 1.5em;
`

const HeaderText = (props) => {
    return (
        <Container>
            <Tittle tittle={props.tittle}></Tittle>
            <Text text={props.text}>
            </Text>
            <HorizontalLineBox>
                <HorizontalLine></HorizontalLine>
                <LineText>PRODUKTY</LineText>
                <HorizontalLine></HorizontalLine>
            </HorizontalLineBox>
        </Container>
    )
}

export default HeaderText;