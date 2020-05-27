import React from 'react';
import styled from 'styled-components';
import AboutProduct from '../components/AboutProduct/AboutProduct';

const Container = styled.div`

`

const MoreInformation = () => {
    return (
        <Container>
            <AboutProduct></AboutProduct>
        </Container>
    )
}

export default MoreInformation;