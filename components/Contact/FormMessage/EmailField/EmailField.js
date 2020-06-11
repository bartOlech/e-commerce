import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #878787;
    margin-bottom: 10px;
    font-size: 1em;
`
const Input = styled.input`
    font-family: ${FontStyle.family};
    color: #414141;
    font-size: 1.1em;
    width: 90%;
    max-width: 550px;
    height: 38px;
    border: 1px solid #E6E6E6;
    outline: none;
    background-color: #F7F7F7;
    border-radius: 2px;
    padding-left: 3px;
`

const EmailField = () => {
    return (
        <Container>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='text'></Input>
        </Container>
    )
}

export default EmailField;
