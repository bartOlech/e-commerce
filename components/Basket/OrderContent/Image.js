import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
    width: 60px;
    height: 60px;
    background-image: url('../../../static/frame2.jpg');
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 60px 60px;
`

const Image = (props) => {
    return (
        <ImageBox image={props.image}></ImageBox>
    )
}

export default Image;