import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    box-sizing: border-box;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #999;
    font-size: .8em;
    font-weight: 300;
    padding-top: 3px;
    cursor: pointer;
    z-index: 2;
    &&:hover {
        color: #777777;
    }
   
`
const Dot = styled.div`
    font-family: ${FontStyle.family};
    color: #999;
    padding-left: 4px;
    padding-right: 4px;
`

const UpperText = () => {
    return (
        <Container>
            <Text>PREZENT</Text>
            <Dot>•</Dot>
            <Text>PAMIĄTKA</Text>
        </Container>
    )
}

export default UpperText;