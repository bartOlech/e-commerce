import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
// import { FontStyle } from '../../assets/style/style';
import Header from '../Header/Header';
import ImageSlider from './ImageSlider/ImageSlider';
import MainText from './MainText/MainText';
import Products from './Products/Products';
import Footer from './Footer/Footer';
import Basket from '../Basket/Basket';
import MenuLinks from './Menu/MenuLinks';
import BenefitsInfo from '../BenefitsInfo/BenefitsInfo';
import GoToShop from './Button/GoToShop';
import BlurScreen from '../BlurScreen/BlurScreen';

// redux
import { connect } from 'react-redux';
import { getBirthday } from '../../redux/actions/GetFromDatabase/getBirthday';
import { getBirth } from '../../redux/actions/GetFromDatabase/getBirth';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    margin: ${props => props.margin};
`



const StartPage = (props) => {
    
    useEffect(() => { 
        // get products from database
        // get birthday products
        fetch('http://cudnydzien.pl:8080/getBirthdayData').then(res => res.json()).then(json => {
           props.getBirthday(json)
        }).catch(err => console.log(err))
        // get birth products
        fetch('http://cudnydzien.pl:8080/getBirthData').then(res => res.json()).then(json => {
           props.getBirth(json)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <BlurScreen></BlurScreen>
            <Basket></Basket>
            <Header></Header>
            <ImageSlider></ImageSlider>
            <MenuLinks></MenuLinks>
            <MainText></MainText>
            <Products></Products>
            <GoToShop></GoToShop>
            <HorizontalLine margin='20px 0 0 0'></HorizontalLine>
            <BenefitsInfo margin='0 0 60px 0'></BenefitsInfo>
            <HorizontalLine margin='-45px 0 0 0'></HorizontalLine>
            <Footer></Footer>
        </Container>
    )
}

const mapDispatchToProps = {
    getBirthday,
    getBirth
}


export default connect(null, mapDispatchToProps)(StartPage);