import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #0B0B0B;
    font-size: 1.8em;
    margin-bottom: 8px;
`

const HeadText = (props) => {
    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default HeadText;