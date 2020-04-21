import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 40px 40px;
    margin-bottom: 8px;
`

const Image = (props) => {
    return (
        <Container image={props.image}>

        </Container>
    )
}

export default Image;