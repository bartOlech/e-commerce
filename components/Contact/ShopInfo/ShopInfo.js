import React from 'react';
import styled from 'styled-components';
import MainText from './MainText';
import Phone from './Phone/Phone';
import Mail from './Mail/Mail';
import Address from './Address/Address';

const Container = styled.div`
    margin-left: 26px;
    margin-top: 45px;
    @media (min-width: 1000px) {
        margin-top: 5px;
    }
    margin-bottom: 40px;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
`

const ShopInfo = () => {
    return (
        <Container>
            <MainText></MainText>
            <Box>
                <Address></Address>
                <Mail></Mail>
                <Phone></Phone>
            </Box>
           
        </Container>
    )
}

export default ShopInfo;
