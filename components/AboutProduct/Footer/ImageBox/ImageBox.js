import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Copyright from '../../../StartPage/Footer/Copyright/Copyright';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const ImageBox = () => {
    return (
        <Container>
            <Image></Image>
            <Copyright></Copyright>
        </Container>
    )
}

export default ImageBox;