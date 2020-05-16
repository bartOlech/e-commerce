import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import Button from './Button';
import UpperCategory from './UpperCategory/UpperCategory';

const Container = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    box-sizing: border-box;
    @media (max-width: 1000px) {
        display: none;
    }
`
const Tittle = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.5em;
    text-align: left;
    margin-bottom: 15px;
    font-weight: 400;
    margin-top: 33px;
`
const CategoryBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const DesktopMenu = () => {
    return (
        <Container>
            <UpperCategory></UpperCategory>
            <Tittle>Kategorie</Tittle>
            <CategoryBox>
                <Button selectedCategory='URODZINY'></Button>
                <Button selectedCategory='NARODZINY'></Button>
                <Button selectedCategory='ROCZNICA'></Button>
                <Button selectedCategory='ŚLUB'></Button>
                <Button selectedCategory='ROCZNICA'></Button>
                <Button selectedCategory='ROCZNICA'></Button>
                <Button selectedCategory='ŚLUB'></Button>
                <Button selectedCategory='ROCZNICA'></Button>
                <Button selectedCategory='ŚLUB'></Button>
                <Button selectedCategory='ROCZNICA'></Button>
            </CategoryBox>
        </Container>
    )
}

export default DesktopMenu;