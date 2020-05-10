import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import Link from 'next/link'
import { connect } from 'react-redux';
import { setRegulationsValidation } from '../../../../redux/actions/FormFields/setRegulationsValidation';

const Container = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 20px;
    @media (min-width: 1000px) {
        /* width: 100px; */
    }
`   
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 8px;
    padding-left: 4px;
`
const CheckRegulationsSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 30px;
`
const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    border: ${props => props.border};
`
const CheckboxAlert = styled.div`
    font-family: ${FontStyle.family};
    color: #d72323;
    font-size: 1em;
    margin-left: 5px;
    margin-top: -5px;
    display: ${props => props.display};
`

const Regulations = (props) => {

  const handleCheckbox = (e) => {
    props.setRegulationsValidation(e.target.checked)
  }
 
    return (
        <Container>
            <CheckRegulationsSection>
                <Checkbox onChange={handleCheckbox} id='regulations' type='checkbox'></Checkbox>
                <Label style={{fontSize: '1.2em', paddingRight: '10px'}} htmlFor='regulations'>
                    Zaakceptuj
                    <Link href='/regulations'>
                        <a target="_blank"style={{color: '#FB5C43', cursor: 'pointer', textDecoration: 'none', margin: '0 5px 0 5px'}}>Regulamin</a>
                    </Link>  
                    sklepu
                </Label>   
            </CheckRegulationsSection>
            <CheckboxAlert display={props.regulationsValidate ? 'none' : 'inline'}>*Musisz zaakceptować regulamin</CheckboxAlert>
        </Container>
    )
}

const mapDispatchToProps = {
    setRegulationsValidation
}

export default connect(null, mapDispatchToProps)(Regulations);