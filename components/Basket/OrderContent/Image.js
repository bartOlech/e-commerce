import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
    width: 60px;
    height: 60px;
    background-image: url('../../../static/frame2.jpg');
    background-repeat: no-repeat;
    background-size: 60px 60px;
`

const Image = () => {
    return (
        <ImageBox></ImageBox>
    )
}

export default Image;