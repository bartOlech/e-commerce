import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    padding-bottom: 15px;

`

const MainText = () => {
    return (
        <Container>
            INFORMACJA O SKLEPIE:
        </Container>
    )
}

export default MainText;
