import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -45px;
    @media (min-width: 1000px) {
        flex-direction: column;
    }
`

const Text = styled.div`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.3em;
    line-height: 1.5;
    letter-spacing: 2px;
    color: ${FontStyle.color};
    text-align: center;
    font-weight: 200;
    padding-left: 20px;
    padding-right: 20px;
    font-style: italic;
`
const BottomText = styled.p`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: .9em;
    line-height: 1.5;
    letter-spacing: 2px;
    color: #999;
    text-align: center;
    font-weight: 200;
    display: none;
    @media (min-width: 1000px) {
       display: inline;
    }
`

const MainText = () => {
    return (
        <Container>
            <Text>Upamiętnij chwilę na zawsze </Text>
            <BottomText>Przykładowy tekst do opracowania...</BottomText>
        </Container>
    )
}

export default MainText;