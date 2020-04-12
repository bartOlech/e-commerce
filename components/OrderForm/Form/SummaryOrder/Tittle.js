import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 8px;
`

const Tittle = () => {
    return (
        <Text>
            Podsumowanie
        </Text>
    )
}

export default Tittle;