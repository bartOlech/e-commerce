import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
   font-family: ${FontStyle.family};
   font-size: 2em;
   font-weight: 300;
   color: #202020;
`

const Tittle = () => {
    return (
        <Container>
            The Absolutely Sweetest Theme
        </Container>
    )
}

export default Tittle;