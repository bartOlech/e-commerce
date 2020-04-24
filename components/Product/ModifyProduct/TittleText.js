import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    color: #3B475A;
    font-weight: 400;
    margin-left: 15px;
`

const TittleText = (props) => {

    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default TittleText;