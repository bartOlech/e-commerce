import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #393939;
    font-size: 1.4em;
    font-weight: 200;
    text-align: center;
    margin-bottom: 7px;
`

const Name = (props) => {
    return (
        <Container>
            {props.name}
        </Container>
    )
}

export default Name;