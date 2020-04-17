import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import BasketIco from './BasketIco';

const Conatiner = styled.div`
    width: 100%;
    height: 65px;
    background-color: #F7F7F7;
    display: flex;
    justify-content: space-between;
    padding-top: 17px;
    box-sizing: border-box;
`

const Header = () => {
    return (
        <Conatiner>
            <Logo></Logo>
            <BasketIco></BasketIco>
        </Conatiner>
    )
}

export default Header;