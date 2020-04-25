import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import Router from 'next/router';

const Container = styled.u`
    font-family: ${FontStyle.family};
    font-size: 1em;
    color: ${FontStyle.color};
    font-weight: 300;
    cursor: pointer;
`

const FooterButtons = () => {

    const continueShoping = () => {
        Router.push('/shop')
    }

    return (
        <Container onClick={continueShoping}>
            Kontynuuj zakupy
        </Container>
    )
}

export default FooterButtons;