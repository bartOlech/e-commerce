import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.2em;
    font-weight: 300;
    color: #BCBCBC;
    margin-bottom: -15px;
`

const AdditionalText = (props) => {
    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default AdditionalText;