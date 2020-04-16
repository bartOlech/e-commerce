import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    font-weight: 300;
    color: #202020;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 20px;
    position: relative;
    &&:before {
        content: '';
        width: 85px;
        height: 25px;
        position: absolute;
        left: 10px;
        top: 3px;
        background-color: #FB5C43;
        opacity: .1;
        z-index: -1;
    }
`

const Tittle = () => {
    return (
        <Container>
            KARTKA Z KALENDARZA - CO TO TAKIEGO?
        </Container>
    )
}

export default Tittle;