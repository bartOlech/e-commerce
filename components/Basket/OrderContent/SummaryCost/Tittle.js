import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1em;
    font-weight: 400;
    margin-right: 60px;
`

const Tittle = () => {
    return (
        <Container>
          Zakupy razem:
        </Container>
    )
}

export default Tittle;