import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #878787;
    margin-bottom: 10px;
    font-size: 1em;
`
const Input = styled.textarea`
    font-family: ${FontStyle.family};
    color: #414141;
    font-size: 1.1em;
    width: 90%;
    height: 100px;
    border: 1px solid #E6E6E6;
    outline: none;
    background-color: #F7F7F7;
    border-radius: 2px;
    font-weight: 300;
    padding-left: 3px;
`

const Message = () => {
    return (
        <Container>
            <Label htmlFor='msg'>Wiadomość</Label>
            <Input id='msg'></Input>
        </Container>
    )
}

export default Message;
