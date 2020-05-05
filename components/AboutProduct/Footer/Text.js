import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'

const Container = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.9em;
    font-weight: 300;
    color: #202020;
    text-align: center;
    margin: 30px 0 60px 0;
    font-style: italic;
    letter-spacing: .3px;
    @media (min-width: 1000px) {
        font-size: 2.5em;
    }
`

const Text = () => {
    return (
        <Container>
            &rdquo;Najpiękniejsze prezenty to te najprostsze&bdquo;
        </Container>
    )
}

export default Text;