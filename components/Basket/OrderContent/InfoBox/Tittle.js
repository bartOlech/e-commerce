import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1em;
    font-weight: 300;
`

const Tittle = () => {
    return (
        <Text>
            Obrazek drewniany AZT
        </Text>
    )
}

export default Tittle;