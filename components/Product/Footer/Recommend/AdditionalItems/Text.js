import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    font-size: 1.6em;
    margin-bottom: 20px;
`

const Text = () => {
    return (
        <Container>
            INNI DOBIERALI RÓWNIEŻ 
        </Container>
    )
}

export default Text;