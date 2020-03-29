import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.8em;
    padding-top: 10px;
    margin-left: 10px;
    font-weight: 500;
`

const AttributeName = (props) => {
    return (
        <Container>
           {props.name}
        </Container>
    )
}

export default AttributeName;