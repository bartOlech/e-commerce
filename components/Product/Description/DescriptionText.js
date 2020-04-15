import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    color: #3E4449;
    font-weight: 300;
    line-height: 1.2em;
    margin-top: -3px;
`

const DescriptionText = (props) => {
    return (
        <Container>
            <Text>{props.description}</Text>
        </Container>
    )
}

export default DescriptionText;