import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import Link from 'next/link'

const Container = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 20px;
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
`

const Name = () => {

  

    return (
        <Container>
            <CheckRegulationsSection>
                <Checkbox id='regulations' type='checkbox'></Checkbox>
                <Label style={{fontSize: '1.2em', paddingRight: '10px'}} htmlFor='regulations'>
                    Zaakceptuj
                    <Link href='/regulations'>
                        <a target="_blank"style={{color: '#FB5C43', cursor: 'pointer', textDecoration: 'none', margin: '0 5px 0 5px'}}>Regulamin</a>
                    </Link>  
                    sklepu
                </Label>
            
            </CheckRegulationsSection>
        </Container>
    )
}

export default Name;