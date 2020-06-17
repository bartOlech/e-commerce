import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    padding-left: 10px;
    margin-bottom: 15px;
`

const MainText = () => {
    return (
        <Text>Obramowanie:</Text>
    )
}

export default MainText;