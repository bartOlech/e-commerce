import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Text = styled.div`
   font-family: ${FontStyle.family};
   color: ${FontStyle.color};
   text-align: center;
   font-weight: 400;
   font-size: 1.3em;
   margin-bottom: 10px;
   margin-top: 10px;
`

const Tittle = (props) => {
    return (
        <Text>
            {props.tittle}
        </Text>
    )
}

export default Tittle;