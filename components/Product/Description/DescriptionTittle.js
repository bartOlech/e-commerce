import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    color: #3B475A;
    font-weight: 400;
    margin-bottom: 10px;
`

const DescriptionTittle = (props) => {
    return (
        <Container>{props.tittle}</Container>
    )
}

export default DescriptionTittle;