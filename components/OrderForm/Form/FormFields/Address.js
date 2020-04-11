import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    max-width: 450px;
    height: 80px;
    margin-top: 13px;
`   
const AddressBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
    width: 94%;
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
const Street = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Number = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Address = () => {

    return (
        <Container>
            <AddressBox>
                <Street>
                    <Label htmlFor='street'>Ulica</Label>
                    <Input type='text' id='street'></Input>
                </Street>
                <Number>
                    <Label htmlFor='housenumber'>Numer</Label>
                    <Input style={{ width: '84%'}} type='text' id='number'></Input>
                </Number>
            </AddressBox>
        </Container>
    )
}

export default Address;