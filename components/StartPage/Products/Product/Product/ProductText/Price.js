import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #393939;
    font-size: 1em;
    font-weight: 500;
    text-align: center;
`

const Price = (props) => {
    return (
        <Container>
            {props.price}zł
        </Container>
    )
}

export default Price;