import React from 'react';
import styled from 'styled-components';
import ProductContainer from '../components/Product/ProductContainer';

const Container = styled.div`

`

const Product = () => {
    return (
        <Container>
            <ProductContainer></ProductContainer>
        </Container>
    )
}

export default Product;