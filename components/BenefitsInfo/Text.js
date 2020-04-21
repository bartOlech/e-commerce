import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../assets/style/style';

const Container = styled.div`

`
const Tittle = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1em;
    font-weight: 300;
    text-align: center;
    padding-bottom: 8px;
`
const MainText = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: .85em;
    font-weight: 300;
    text-align: center;
`

const Text = (props) => {
    return (
        <Container>
            <Tittle>{props.tittle}</Tittle>
            <MainText>{props.text}</MainText>
        </Container>
    )
}

export default Text;