import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
// redux
import { connect } from 'react-redux';
import { setNumberValidation } from '../../../../redux/actions/FormFields/setNumberValidation';
import { setStreetValidation } from '../../../../redux/actions/FormFields/setStreetValidation';

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
    border: ${props => props.border};
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

const Address = (props) => {

    const handleStreet = (e) => {
        props.setStreetValidation(e.target.value)
    }

    const handleNumber = (e) => {
        props.setNumberValidation(e.target.value)
    }

    return (
        <Container>
            <AddressBox>
                <Street>
                    <Label htmlFor='street'>Ulica</Label>
                    <Input border={props.streetValidate ? 'none' : '1px solid #f5587b'} onChange={handleStreet} type='text' id='street'></Input>
                </Street>
                <Number>
                    <Label htmlFor='housenumber'>Numer</Label>
                    <Input border={props.numberValidate ? 'none' : '1px solid #f5587b'} onChange={handleNumber} style={{ width: '84%'}} type='text' id='housenumber'></Input>
                </Number>
            </AddressBox>
        </Container>
    )
}

const mapDispatchToProps = {
    setNumberValidation,
    setStreetValidation
}
const mapStateToProps = state => ({
    streetValidation: state.validation.street,
    numberValidation: state.validation.number
})

export default connect(mapStateToProps, mapDispatchToProps)(Address);