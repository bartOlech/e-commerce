import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import Link from 'next/link';

const Container = styled.div`
    width: 95%;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (min-width: 1000px) {
        /* width: 100px; */
    }
`   
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1em;
    font-weight: 400;
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
    margin-top: 5px;
    /* border: ${props => props.border}; */
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
    
  }
 
    return (
        <Container>
            <CheckRegulationsSection>
                <Checkbox onChange={handleCheckbox} id='regulations' type='checkbox'></Checkbox>
                <Label style={{fontSize: '1.1em', paddingRight: '10px', paddingTop: '2px'}} htmlFor='regulations'>
                    Wysyłając formularz oświadczasz, że zapoznałeś się z
                    <Link href='/regulations'>
                        <a target="_blank"style={{color: '#FBAF62', cursor: 'pointer', textDecoration: 'none', margin: '0 5px 0 5px'}}>Regulamin</a>
                    </Link>  
                    sklepu i go akceptujesz
                </Label>   
            </CheckRegulationsSection>
            {/* <CheckboxAlert display={props.regulationsValidate ? 'none' : 'inline'}>*Musisz zaakceptować regulamin</CheckboxAlert> */}
        </Container>
    )
}

export default Regulations;