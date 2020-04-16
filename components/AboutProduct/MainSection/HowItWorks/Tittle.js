import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    padding-left: 5%;
    font-size: 1.8em;
    margin-top: 10px;
    margin-bottom: 20px;
    font-weight: 300;
`

const Tittle = () => {
    return (
        <Text>
            Jak złożyć zamówienie
        </Text>
    )
}

export default Tittle;
         
