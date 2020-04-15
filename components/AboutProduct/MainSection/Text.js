import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'

const Container = styled.p`
    font-family: ${FontStyle.family};
    color: #3B475A;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 1.1em;
`

const Text = (props) => {
    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default Text;