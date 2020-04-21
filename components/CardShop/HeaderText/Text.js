import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
   width: 90%;
   max-width: 470px;
   font-family: ${FontStyle.family};
   color: #BFBFBF;
   text-align: center;
   font-weight: 300;
   font-size: .9em;
`

const Text = (props) => {
    return (
        <Container>
            {props.text}
        </Container>
    )
}

export default Text;