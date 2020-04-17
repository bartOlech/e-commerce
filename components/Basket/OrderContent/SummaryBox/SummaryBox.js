import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import Price from './Price';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4px;
`

const SummaryBox = (props) => {
    return (
        <Container>
            <CloseButton></CloseButton>
            <Price price={props.price}></Price>
        </Container>
    )
}

export default SummaryBox;