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
    width: 90%;
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
const Code = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const CityNumber = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const City = () => {

    return (
        <Container>
            <AddressBox>
                <Code>
                    <Label htmlFor='zip'>Kod pocztowy</Label>
                    <Input  pattern="[A-Za-z]{3}" type='text' id='zip'></Input>
                </Code>
                <CityNumber>
                    <Label htmlFor='city'>Miasto</Label>
                    <Input style={{ width: '92%'}} type='text' id='city'></Input>
                </CityNumber>
            </AddressBox>
        </Container>
    )
}

export default City;