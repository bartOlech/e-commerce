import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'

const Container = styled.p`
    font-family: ${FontStyle.family};
    font-size: 1.2em;
    font-weight: 300;
    color: #BCBCBC;
    padding-left: 5%;
    padding-right: 5%;
`

const Text = (props) => {
    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default Text;