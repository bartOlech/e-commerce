import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import ImageBox from './ImageBox/ImageBox';

const Container = styled.div`

`

const Footer = () => {
    return (
        <Container>
            <Text></Text>
            <ImageBox></ImageBox>
        </Container>
    )
}

export default Footer;