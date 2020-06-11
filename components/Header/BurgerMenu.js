import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'
import Router from 'next/router';
import { FontStyle } from '../../assets/style/style';

const Conatiner = styled.div`
    width: 30px;
    height: 30px;
    position: relative;
    margin-left: 20px;
    @media(min-width: 1000px) {
        display: none;
    }
`
const Li = styled.div`
    font-family: ${FontStyle.family};
    color: #D8D8D8;
    font-weight: 600;
    font-size: 1.3em;
    cursor: pointer;
    margin-bottom: 25px;
    outline: none;
    &&:hover {
        color: ${FontStyle.logoColor};
    }
`
const Img = styled.img`
    
    outline: none;
`

const  BurgerMenu = () => {
    return (
        <Conatiner>
           <Menu animation='stack' customBurgerIcon={ <Img src='../../static/burger-menu.svg' />}>
                <Li onClick={() => Router.push('/shop')}>SKLEP</Li>
                <Li onClick={() => Router.push('/about')}>O NAS</Li>
                <Li onClick={() => Router.push('/about')}>PROMOCJE</Li>
                <Li onClick={() => Router.push('/contact')}>KONTAKT</Li>
            </Menu>
        </Conatiner>
    )
}

export default BurgerMenu;