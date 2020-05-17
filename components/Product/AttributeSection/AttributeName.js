import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.6em;
    padding-top: 10px;
    margin-left: 10px;
    font-weight: 500;
    @media (min-width: 1000px) {
        display: none;
    }
`

const AttributeName = (props) => {
    return (
        <Container>
           {props.name}
        </Container>
    )
}

export default AttributeName;