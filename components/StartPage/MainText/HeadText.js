import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 2em;
    font-weight: 300;
    color: #202020;
    margin-bottom: 8px;
    position: relative;
    &&:after {
        content: '';
        width: 80px; 
        height: 26px;
        position: absolute;
        top: 12px;
        right: 105px;
        background-color: #FB5C43;
        opacity: .15;
        z-index: -1;
    }
`

const HeadText = (props) => {
    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default HeadText;