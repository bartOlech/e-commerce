import React from 'react';
import styled from 'styled-components';
import Header from '../Product/Header/Header';
import BenefitsInfo from '../BenefitsInfo/BenefitsInfo';
import Copyright from '../StartPage/Footer/Copyright/Copyright';
import BirthdayShop from './Products/BirthdayShop/BirthdayShop';
import Menu from './Menu/Menu'

const Container = styled.div`
   
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    margin-top: -35px;
    margin-bottom: 10px;
`

const Shop = () => {
    return (
        <Container>
            <Header background='#fff'></Header>
            <Menu></Menu>
            <BirthdayShop></BirthdayShop>
            <HorizontalLine></HorizontalLine>
            <BenefitsInfo margin='0 0 30px 0'></BenefitsInfo>
            <Copyright></Copyright>
        </Container>
    )
}

export default Shop;