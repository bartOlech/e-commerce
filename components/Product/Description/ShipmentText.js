import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    color: #BABABA;
    font-weight: 500;
    margin-top: 15px;
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