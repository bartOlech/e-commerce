import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { setPhoneValidation } from '../../../../redux/actions/FormFields/setPhoneValidation';

const Container = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 20px;
    @media (min-width: 1000px) {
        margin-top: 30px;
    }
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
    border: 1px solid rgba(217, 217, 217, .5);
    border-radius: 4px;
`

const Phone = (props) => {

    const handlePhone = (e) => {
        props.setPhoneValidation(e.target.value)
    }

    return (
        <Container>
            <PhoneBox>
                <Label htmlFor='phone'>Telefon</Label>
                <InputMask onChange={handlePhone} mask="+4\8 999 999 999" >
                    {(inputProps) => <Input type='text' id='phone'></Input>}   
                </InputMask>
            </PhoneBox>
        </Container>
    )
}

const mapDispatchToProps = {
    setPhoneValidation
}

export default connect(null, mapDispatchToProps)(Phone);