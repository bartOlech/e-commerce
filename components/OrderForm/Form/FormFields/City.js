import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import InputMask from 'react-input-mask';


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
    width: 37%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const PostCity = styled.div`
    width: 63%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const City = () => {
    const [code, setCode] = useState('')
    const [city, setCity] = useState('')

    const handleCode = (e) => {
        setCode(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)    
    }

    return (
        <Container>
            <AddressBox>
                {console.log(city)}
                <Code>
                    <Label htmlFor='zip'>Kod pocztowy</Label>
                    <InputMask onChange={handleCode} mask="99-999" >
                        {(inputProps) => <Input type='text' id='zip'></Input>}   
                    </InputMask>
                </Code>
                <PostCity>
                    <Label htmlFor='city'>Miasto</Label>
                    <Input onChange={handleCity} style={{ width: '92%'}} type='text' id='city'></Input>
                </PostCity>
            </AddressBox>
        </Container>
    )
}

export default City;