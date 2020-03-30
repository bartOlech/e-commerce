import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    color: #3B475A;
    font-weight: 400;
    margin-bottom: 20px;
`

const DescriptionTittle = () => {
    return (
        <Container>Opis</Container>
    )
}

export default DescriptionTittle;