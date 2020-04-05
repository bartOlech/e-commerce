import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import AttributeSection from './AttributeSection/AttributeSection';
import Description from './Description/Description';
import SelectDate from './SelectDate/SelectDate';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Product = () => {
    return (
        <Container>
            <Header></Header>
            <AttributeSection></AttributeSection>
            <Description></Description>
            <SelectDate></SelectDate>
        </Container>
    )
}

export default Product;