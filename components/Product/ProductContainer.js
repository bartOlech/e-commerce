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
import { All as AllData } from '../../assets/FramesData/All';
import {useRouter, withRouter} from 'next/router';
import ModifyProduct from './ModifyProduct/ModifyProduct';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Product = (props) => {
    const {query: {id}} = useRouter();
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

    // in the future, here getting from database
    useEffect(() => {
        // set initial data from selected product
        AllData.map((el, index) => {
            if(id == el.id) {
                // ZROB DESTRUKTURYZACJE
                const { 
                    id,
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
                } = el;

                const frameColorsArr = el.frameColors;
                const frameColors = el.frameColors[0];

                props.setFrameDetails(id, name, image, images, description, shipment, additionalData, color, price, frameColors, frameColorsArr);
                setSizeWithPrice(priceWithSize);
                setInitialPrice(price)
                props.setPrice(price)
                props.setSize(size)
            }
        })
    }, [])

    return (
        <Container>
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

})

const mapDispatchToProps = {
    setFrameDetails,
    setPrice,
    setSize
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);