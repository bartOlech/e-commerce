import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    font-weight: 400;
    padding-left: 30px;
`

const Tittle = () => {
    return (
        <Container>
            Koszyk
        </Container>
    )
}

export default Tittle;