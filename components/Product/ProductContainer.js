import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Product = () => {
    return (
        <Container>
            <Header></Header>
        </Container>
    )
}

export default Product;