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
    font-size: 1em;
    width: 90%;
    height: 40px;
    outline: none;
`

const Attachment = () => {
    return (
        <Container>
            <Label htmlFor='d'>Załącznik (opcjonalnie)</Label>
            {/* <Label htmlFor='email'>Załącznik</Label> */}
            <Input id='email' type='file'></Input>
        </Container>
    )
}

export default Attachment;
