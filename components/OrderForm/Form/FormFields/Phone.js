import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 20px;
`   
const PhoneBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 8px;
    padding-left: 4px;
`
const Input = styled.input`
    width: 95%;
    max-width: 450px;
    height: 40px;
    background-color: #F0F0F0;
    border: none; 
    border-radius: 1px;
    outline: none;
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
    padding-left: 5px;
`

const Phone = () => {

    return (
        <Container>
            <PhoneBox>
                <Label htmlFor='phone'>Telefon</Label>
                <Input type='text' id='phone'></Input>
            </PhoneBox>
        </Container>
    )
}

export default Phone;