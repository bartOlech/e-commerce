import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #414141;
    font-size: 1.2em;
    padding-bottom: 15px;

`

const MainText = () => {
    return (
        <Container>
            KONTAKT Z NAMI
        </Container>
    )
}

export default MainText;
