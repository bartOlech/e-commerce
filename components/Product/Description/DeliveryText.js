import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    color: #3E4449;
    font-weight: 300;
    line-height: 1.2em;
    margin-top: -3px;
`

const DeliveryText = (props) => {
    return (
        <Container>
            <Text>
                Korzystamy z firmy kurierskiej InPost - wygodna dostawa do paczkomatów oraz dostawa kurierska. 
            </Text>
            <Text style={{fontWeight: '400'}}>
                Paczkomaty - 8.99
            </Text>
            <Text style={{fontWeight: '400'}}>
                Paczkomaty pobranie - 12.99
            </Text>
            <Text style={{fontWeight: '400'}}>
                Kurier - 12.99
            </Text>
            <Text style={{fontWeight: '400'}}>
                Kurier pobranie - 14.99
            </Text>
        </Container>
    )
}

export default DeliveryText;