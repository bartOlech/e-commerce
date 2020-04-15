import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    padding-left: 5%;
    font-size: 1.7em;
    margin-top: 10px;
    margin-bottom: 20px;
`

const Tittle = () => {
    return (
        <Text>
            3 proste kroki
        </Text>
    )
}

export default Tittle;
         
