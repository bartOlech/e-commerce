import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const List = styled.div`
    display: flex;
    position: absolute;
    left: 170px;
    top: 21px;
`
const Li = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    font-size: 1.3em;
    cursor: pointer;
    transition: .1s;
    margin-right: 20px;
    &&:hover {
        border-bottom: 1px solid #000;
    }
`

const HeaderMenu = () => {
    return (
        <List>
            <Li>SKLEP</Li>
            <Li>O NAS</Li>
            <Li>PROMOCJE</Li>
        </List>
    )
}

export default HeaderMenu;