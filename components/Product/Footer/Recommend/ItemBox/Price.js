import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    font-size: 1em;
    text-align: center;
    width: 160px;
`
const Price = (props) => {
    return (
        <Container>
            {props.price} zł
        </Container>
    )
}

export default Price;