import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import BasketIco from './BasketIco';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import CheckoutButton from './CheckoutButton';

const Conatiner = styled.div`
    width: 100%;
    height: 65px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding-top: 17px;
    box-sizing: border-box;
    position: relative;
`

const Header = () => {
    return (
        <Conatiner>
            <Logo></Logo>
            <HeaderMenu top='24px' left='170px'></HeaderMenu>
            <BasketIco></BasketIco>
            <CheckoutButton></CheckoutButton>
        </Conatiner>
    )
}

export default Header;