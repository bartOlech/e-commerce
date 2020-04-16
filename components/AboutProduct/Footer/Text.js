import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.9em;
    font-weight: 300;
    color: #191B1F;
    text-align: center;
    margin: 30px 0 45px 0;
`

const Text = () => {
    return (
        <Container>
            Najpiękniejsze prezenty to te najprostsze
        </Container>
    )
}

export default Text;