import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Header from '../Product/Header/Header';
import Header from '../Header/Header';
import BenefitsInfo from '../BenefitsInfo/BenefitsInfo';
import Copyright from '../StartPage/Footer/Copyright/Copyright';
import BirthdayShop from './Products/BirthdayShop/BirthdayShop';
import BirthShop from './Products/BirthShop/BirthShop';
import AnniversaryShop from './Products/AnniversaryShop/AnniversaryShop';
import WeddingShop from './Products/WeddingShop/WeddingShop';
import Menu from './Menu/Menu';
import { connect } from 'react-redux';
import { getBirthday } from '../../redux/actions/GetFromDatabase/getBirthday';
import Basket from '../Basket/Basket';
import BlurScreen from '../BlurScreen/BlurScreen';
import DesktopMenu from './Menu/DesktopMenu/DesktopMenu';

const Container = styled.div`
   
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    margin: ${props => props.margin};
    opacity: ${props => props.opacity};
`
const ProductContent = styled.div`
    width: 100%;
    @media (min-width: 1000px) {
        width: 85%;
    }
`
const Main = styled.div`
    display: flex;
`

const Shop = (props) => {
    return (
        <Container>
            <BlurScreen></BlurScreen>
            <Basket></Basket>
            <Header background='#fff'></Header>
            <HorizontalLine margin='3px 0 3px 0 ' opacity='.3'></HorizontalLine>
            <Menu></Menu>
            <Main>
                <DesktopMenu></DesktopMenu>
                <ProductContent>
                    {props.category === 'URODZINY' ? <BirthdayShop birthday={props.birthday}></BirthdayShop> : null}
                    {props.category === 'ROCZNICA' ? <AnniversaryShop></AnniversaryShop> : null}
                    {props.category === 'NARODZINY' ? <BirthShop birthProducts={props.birthProducts}></BirthShop> : null}
                    {props.category === 'ŚLUB' ? <WeddingShop></WeddingShop> : null}
                </ProductContent>
            </Main>
            <HorizontalLine margin='0 0 30px 0' opacity='1'></HorizontalLine>
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