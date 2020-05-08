import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';
import { setEmailValidation } from '../../../../redux/actions/FormFields/setEmailValidation';

const Container = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 20px;
`   
const EmailBox = styled.div`
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
    border: ${props => props.border};
    border-radius: 4px;
`

const Email = (props) => {

    const handleEmail = (e) => {
       props.setEmailValidation(e.target.value);
    }

    return (
        <Container>
            <EmailBox>
                <Label htmlFor='email'>Email</Label>
                <Input border={props.emailValidate ? '1px solid rgba(217, 217, 217, .5)' : '1px solid #f5587b'} onChange={handleEmail} type='text' id='email'></Input>
            </EmailBox>
        </Container>
    )
}

const mapDispatchToProps = {
    setEmailValidation
}

export default connect(null, mapDispatchToProps)(Email);