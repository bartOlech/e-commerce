import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    font-size: 1.2em;
    color: #808080;
    font-weight: 300;
    line-height: 1.2em;
    margin-top: -3px;
`

const DescriptionTittle = (props) => {
    return (
        <Container>
            <Text>{props.description}</Text>
        </Container>
    )
}

export default DescriptionTittle;