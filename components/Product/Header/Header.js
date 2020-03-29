import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';
import Logo from './Logo';

const Container = styled.div`   
    width: 100%;
    height: 60px;
    display: flex;
    background-color: rgba(233, 232, 235, .5);
`

const Header = () => {
    return (
        <Container>
            <BackButton></BackButton>
            <Logo></Logo>
        </Container>
    )
}

export default Header;