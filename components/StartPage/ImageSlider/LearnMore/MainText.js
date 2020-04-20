import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -45px;
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

const MainText = () => {
    return (
        <Container>
            <Text>Upamiętnij chwilę na zawsze </Text>
        </Container>
    )
}

export default MainText;