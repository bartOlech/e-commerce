import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import Router from 'next/router';

const List = styled.div`
    display: flex;
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    @media (max-width: 1000px) {
        display: none;
    }
`
const Li = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    font-size: 1.2em;
    cursor: pointer;
    transition: .1s;
    margin-right: 20px;
    &&:hover {
        color: #DD9900;
    }
`

const HeaderMenu = (props) => {
    return (
        <List top={props.top} left={props.left}>
            <Li onClick={() => Router.push('/shop')}>SKLEP</Li>
            <Li onClick={() => Router.push('/about')}>O NAS</Li>
            <Li>PROMOCJE</Li>
            <Li onClick={() => Router.push('/contact')}>KONTAKT</Li>
        </List>
    )
}

export default HeaderMenu;