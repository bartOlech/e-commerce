import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.p`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 2em;
    padding-top: 65px;
    margin-bottom: 10px;
    font-weight: 300;
`

const MainText = (props) => {
    return (
        <Container>
            {props.mainText}
        </Container>
    )
}

export default MainText;