import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 160px;
    height: 210px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 160px 210px;
    position: absolute;
    top: 0;
    left: 0;
`

const ProductImage = (props) => {
    return (
        <Container  image={props.image}>

        </Container>
    )
}

export default ProductImage;