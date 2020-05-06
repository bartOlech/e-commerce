import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.3em;
    font-weight: 300;
    margin-left: 15px;
    margin-bottom: 15px;
    margin-top: 5px;
`

const TittleText = (props) => {

    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default TittleText;