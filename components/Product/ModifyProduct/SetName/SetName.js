import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import ToolTipMessage from '../ToolTip/ToolTip';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1em;
    margin-bottom: 5px;
`
const Input = styled.input`
    width: 90%;
    max-width: 300px;
    height: 35px;
    border: 1px solid #E3E7F1;
    background-color: #fff;
    color: #3B475A;
    font-family: ${FontStyle.family};
    outline: none;
    font-size: 1.3em;
    padding-left: 3px;
`

const SetName = () => {
    return (
        <Container>
            <ToolTipMessage marginLeft='72px' msg='Zakupiony produkt będzie miał podane imię'></ToolTipMessage>
            <Label>Podaj imię</Label>
            <Input></Input>
        </Container>
    )
}

export default SetName;