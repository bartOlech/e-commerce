import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Conatiner = styled.div`
    width: 100%;
    height: 65px;
    background-color: #F7F7F7;
`

const Header = () => {
    return (
        <Conatiner>
            <Logo></Logo>
        </Conatiner>
    )
}

export default Header;