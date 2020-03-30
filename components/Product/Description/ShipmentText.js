import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    color: #959595;
    font-weight: 500;
    margin-top: 20px;
    text-align: right;
`

const DescriptionTittle = (props) => {
    return (
        <Container>
            {props.shipment}
        </Container>
    )
}

export default DescriptionTittle;