import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import CloseButton from './CloseButton';

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <Container>
            <Tittle></Tittle>
            <CloseButton></CloseButton>
        </Container>
    )
}

export default Header;