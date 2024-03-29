import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';
import { setExtraMessageValidation } from '../../../../redux/actions/FormFields/setExtraMessageValidation';

const Container = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 20px;
    @media (min-width: 1000px) {
        margin-top: 17px;
        height: 60px;
    }
`   
const ExtraMessageBox = styled.div`
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
const Textarea = styled.textarea`
    width: 95%;
    max-width: 450px;
    height: 90px;
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
    padding: 10px;
    box-sizing: border-box;
    &&::placeholder {
        font-family: ${FontStyle.family};
        font-weight: 300;
        
    }
    @media (min-width: 1000px) {
        height: 154px;
    }
`

const ExtraMessage = (props) => {

    const handleMessage = (e) => {
        props.setExtraMessageValidation(e.target.value);
    }

    return (
        <Container>
            <ExtraMessageBox>
                {/* <Label htmlFor='extra message'>Dodatkowe informacje</Label> */}
                <Textarea onChange={handleMessage} placeholder='Wiadomość dla sprzedawcy' id='extra message'></Textarea>
            </ExtraMessageBox>
        </Container>
    )
}

const mapDispatchToProps = {
    setExtraMessageValidation
}

export default connect(null, mapDispatchToProps)(ExtraMessage);