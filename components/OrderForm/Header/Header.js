import React from 'react';
import styled from 'styled-components';
import Logo from '../../Header/Logo';
import ReturnButton from './ReturnButton';

const Container = styled.div`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding-top: 18px;
    display: flex;
    justify-content: space-between;
    position: relative;
    &&:before {
        content: '';
        width: 30px;
        height: 73px;
        position: absolute;
        left: -10px;
        top: 0;
        background-color: #fff;
    }
`

const Header = () => {
    return (
        <Container>
            <Logo></Logo>
            <ReturnButton></ReturnButton>
        </Container>
    )
}

export default Header;