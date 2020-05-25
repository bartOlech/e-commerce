import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.7em;
    margin-top: 15px;
    font-weight: 300;
`

const Form = () => {

    return (
        <Text>Dane do wysyłki</Text>
    )
}

export default Form;