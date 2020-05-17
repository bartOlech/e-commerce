import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #5F5F5F;
    font-size: 1em;
    font-weight: 500;
    text-align: center;
    margin-bottom: 7px;
`

const Size = (props) => {
    return (
        <Container>
            {props.size}
        </Container>
    )
}

export default Size;