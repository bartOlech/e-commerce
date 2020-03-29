import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`   
    width: 250px;
    height: 20px;
    display: flex;
    position: absolute;
    right: 10px;
    top: 12px;
    
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #1F1040;
    font-size: 1.4em;
    font-weight: 300;
`
const Line = styled.div`
    width: 70px;
    height: 1px;
    background-color: #FB5C43;
    position: absolute;
    top: 14px;
    left: 180px;
`

const Logo = () => {
    return (
        <Container>
            <Text>Kartka z kalendarza</Text>
            <Line></Line>
        </Container>
    )
}

export default Logo;