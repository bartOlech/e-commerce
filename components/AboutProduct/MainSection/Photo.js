import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    @media (min-width: 1000px) {
        position: absolute;
        top: 0;
        left: 230px;
        right: 0;
        margin: 0 auto;
    }
`

const Photo = styled.img`
    width: 100%;
    height: auto;
    max-width: 500px;
    @media (min-width: 1000px) {
        max-width: 600px;
    }
`

const MainSection = () => {
    return (
        <Container>
            <Photo src='../../../static/AboutPhoto/mainPhoto.png' alt='image' width="400" height="400"></Photo>
        </Container>
    )
}

export default MainSection;