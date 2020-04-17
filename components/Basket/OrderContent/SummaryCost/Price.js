import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: .96em;
    font-weight: 400;
    margin-top: 1px;
`

const Price = () => {
    return (
        <Container>
            312.21 zł
        </Container>
    )
}

export default Price;