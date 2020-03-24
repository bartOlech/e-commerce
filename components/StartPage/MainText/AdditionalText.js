import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #8E8E8E;
    font-size: 1.3em;
    
`

const AdditionalText = (props) => {
    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default AdditionalText;