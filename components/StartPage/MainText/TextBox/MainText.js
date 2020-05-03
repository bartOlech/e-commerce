import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
   font-family: ${FontStyle.family};
   font-size: 1.2em;
   font-weight: 300;
   color: #BCBCBC;
   max-width: 600px; 
`

const MainText = () => {
    return (
        <Container>
            Sweet Tooth is filled to the brim with amazing shortcodes, elements, practical inner page layouts and absolutely stunning homepages which can be easily customized to fit your specific needs. 
            Simply import the full demo content 
        </Container>
    )
}

export default MainText;