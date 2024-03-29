import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    font-size: 1.4em;
    margin-bottom: 20px;
    padding-left: 41px;
`

const Text = (props) => {
    return (
        <Container>
            INNE PRZEDMIOTY Z KATEGORII {props.category}
        </Container>
    )
}

export default Text;