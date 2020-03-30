import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    color: #3B475A;
    font-weight: 300;
    line-height: 1.2em;
`

const DescriptionTittle = (props) => {
    return (
        <Container>
            {props.description}
        </Container>
    )
}

export default DescriptionTittle;