import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 225px;
    height: 300px;
    background-image: url(${props => props.image});
    background-size: 225px 300px;
    background-repeat: no-repeat;
    margin-left: 10px;
`

const AttributeImage = (props) => {
    return (
        <Container image={props.image}>
           
        </Container>
    )
}

export default AttributeImage;