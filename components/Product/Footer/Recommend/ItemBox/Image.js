import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 160px;
    height: 210px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 160px 210px;
    transition: .5s;
    cursor: pointer;
    &&:hover {
        background-image: url(${props => props.hoverImage});
        background-size: 155px 205px;
    }
`

const Image = (props) => {
    return (
        <Container hoverImage={props.hoverImage} image={props.image}>

        </Container>
    )
}

export default Image;