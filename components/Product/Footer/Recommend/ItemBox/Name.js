import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    font-size: 1em;
    margin-top: 10px;
    margin-bottom: 5px;
    width: 160px;
    text-align: center;
`

const Name = (props) => {
    return (
        <Container>
            {props.name}
        </Container>
    )
}

export default Name;