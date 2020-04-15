import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';
import Tittle from './Tittle';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const MainSection = () => {
    return (
        <Container>
            <Photo></Photo>
            <Tittle></Tittle>
        </Container>
    )
}

export default MainSection;