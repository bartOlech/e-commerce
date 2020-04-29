import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Product/Header/Header';
import BenefitsInfo from '../BenefitsInfo/BenefitsInfo';
import Copyright from '../StartPage/Footer/Copyright/Copyright';
import BirthdayShop from './Products/BirthdayShop/BirthdayShop';
import BirthShop from './Products/BirthShop/BirthShop';
import AnniversaryShop from './Products/AnniversaryShop/AnniversaryShop';
import WeddingShop from './Products/WeddingShop/WeddingShop';
import Menu from './Menu/Menu';
import { connect } from 'react-redux';
import { getBirthday } from '../../redux/actions/GetFromDatabase/getBirthday';

const Container = styled.div`
   
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    margin-top: -35px;
    margin-bottom: 10px;
`

const Shop = (props) => {
    return (
        <Container>
            <Header background='#fff'></Header>
            <Menu></Menu>
            {props.category === 'birthday' ? <BirthdayShop birthday={props.birthday}></BirthdayShop> : null}
            {props.category === 'anniversary' ? <AnniversaryShop></AnniversaryShop> : null}
            {props.category === 'birth' ? <BirthShop birthProducts={props.birthProducts}></BirthShop> : null}
            {props.category === 'wedding' ? <WeddingShop></WeddingShop> : null}
            <HorizontalLine></HorizontalLine>
            <BenefitsInfo margin='0 0 30px 0'></BenefitsInfo>
            <Copyright></Copyright>
        </Container>
    )
}

const mapStateToProps = state => ({
    birthday: state.products.birthdayProducts,
    birthProducts: state.products.birthProducts,
    category: state.shop.category
})
const mapDispatchToProps = {
    getBirthday
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);