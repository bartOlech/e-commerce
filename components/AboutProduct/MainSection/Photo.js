import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

const Photo = styled.img`
    width: 90%;
    height: auto;
`

const MainSection = () => {
    return (
        <Container>
            <Photo src='../../../static/slideThree.jpg' alt='image' width="600" height="400"></Photo>
        </Container>
    )
}

export default MainSection;