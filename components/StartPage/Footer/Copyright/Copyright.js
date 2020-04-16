import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
 
const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #3C3C3C;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Copyright = () => {
    return (
        <Container>
            Kartka © 2020. All Rights Reserved.
        </Container>
    )
}

export default Copyright;