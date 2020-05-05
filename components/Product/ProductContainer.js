import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import AttributeSection from './AttributeSection/AttributeSection';
import Description from './Description/Description';
import SelectDate from './ModifyProduct/SelectDate/SelectDate';
import BuyButton from './BuyButton/BuyButton';
import Basket from '../Basket/Basket';
import { connect } from 'react-redux';
import { setFrameDetails } from '../../redux/actions/setFrameDetails';
import { setPrice } from '../../redux/actions/setPriceAction';
import { setSize } from '../../redux/actions/setSizeActions';
import {useRouter, withRouter} from 'next/router';
import ModifyProduct from './ModifyProduct/ModifyProduct';
import BlurScreen from '../BlurScreen/BlurScreen';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Product = (props) => {
    const {query: {id, type}} = useRouter();
    const [sizeWithPrice, setSizeWithPrice] = useState('');
    const [initialPrice, setInitialPrice] = useState('')
    const [dateIsSelected, setDateIsSelected] = useState(true)
    const [nameIsFill, setNameIsFill] = useState(true)


    const setDateAlert = (val) => {
        setDateIsSelected(val)
    }

    const setNameFieldAlert = (val) => {
        setNameIsFill(val)
    }

    useEffect(() => {
        // set initial data from selected product

// if product data is available in the store, get data. If not, fetch from database
         // fetch data from database
        //  this data can be available in the store if the page has not been refreshed. Use it!!!
         console.log('get data from database!!!')
         fetch(`http://localhost:3001/api/${type}`).then(res => res.json()).then(json => {
             Object.values(json).map(el => {
                 if(id == el.productId) {
                     const { 
                         productId,
                         name,
                         image,
                         images,
                         description,
                         shipment,
                         additionalData,
                         color,
                         size,
                         priceWithSize,
                         price,
                         clientDateIsRequired,
                         clientNameIsRequired
                     } = el;
     
                     const frameColorsArr = el.frameColors;
                     const frameColors = el.frameColors[0];
     
                     props.setFrameDetails(productId, name, image, images, description, shipment, additionalData, color, price, frameColors, frameColorsArr, clientDateIsRequired, clientNameIsRequired);
                     setSizeWithPrice(priceWithSize);
                     setInitialPrice(price)
                     props.setPrice(price)
                     props.setSize(size)
                 }
             })
         }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <BlurScreen></BlurScreen>
            <Basket></Basket>
            <Header background='rgba(233, 232, 235, .5)'></Header>
            <AttributeSection initialPrice={initialPrice} sizeWithPrice={sizeWithPrice}></AttributeSection>
            <Description></Description>
            <ModifyProduct nameIsFill={nameIsFill} dateIsSelected={dateIsSelected}></ModifyProduct>
            <BuyButton setNameFieldAlert={setNameFieldAlert} setDateAlert={setDateAlert}></BuyButton>
        </Container>
    )
}

const mapStateToProps = state => ({
    birthday: state.products.birthdayProducts,
    birthProducts: state.products.birthProducts,
    frameColor: state.frameData.frameColor,
})

const mapDispatchToProps = {
    setFrameDetails,
    setPrice,
    setSize
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);