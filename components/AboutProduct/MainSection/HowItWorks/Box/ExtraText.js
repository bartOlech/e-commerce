import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.p`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.2em;
    width: 90%;
    text-align: center;
`

const ExtraText = (props) => {
    return (
        <Container>
            {props.extraText}
        </Container>
    )
}

export default ExtraText;