import React from 'react';
import styled from 'styled-components';
import Regulations from './Buttons/Regulations';
import Policy from './Buttons/Policy';
import Copyright from './Copyright/Copyright';
 
const Container = styled.div`

`

const Footer = () => {
    return (
        <Container>
            <Regulations></Regulations>
            <Policy></Policy>
            <Copyright></Copyright>
        </Container>
    )
}

export default Footer;