import React from 'react';
import styled from 'styled-components';
import AdditionalItems from './Recommend/AdditionalItems/AdditionalItems';
import Resamble from './Recommend/Resamble/Resamble';

const Container = styled.div`
    width: 100%;
    margin-top: -10px;
`
const HorizontalLine = styled.div`
    width: 95%;
    height: 1px;
    background-color: rgba(228,231,235,.5);
    margin: 0 auto;
    margin-top: -25px;
`

const Footer = () => {
    return (
        <Container>
            <AdditionalItems></AdditionalItems>
            <HorizontalLine></HorizontalLine>
            <Resamble></Resamble>
        </Container>
    )
}

export default Footer;