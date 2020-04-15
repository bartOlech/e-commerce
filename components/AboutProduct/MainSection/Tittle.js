import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #E52A0D;
    font-size: 1.4em;
    font-weight: 600;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 20px;
`

const Tittle = () => {
    return (
        <Container>
            KARTKA Z KALENDARZA - CO TO TAKIEGO?
        </Container>
    )
}

export default Tittle;