import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
import Header from '../Header/Header';

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 1000px) {
        flex-direction: row;
    }
`
const BottomContent = styled.div`
    display: flex;
    flex-direction: column; 
    @media(min-width: 1000px) {
        margin-left: 50px;

    }
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    margin-bottom: 15px;
    background: #E4E7EB;
    @media(max-width: 1000px) {
            display: none;
        }
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
            <Header></Header>
            <ContentBox>
                <AttributeSection initialPrice={initialPrice} sizeWithPrice={sizeWithPrice}></AttributeSection>
                <BottomContent>
                    <Description></Description>
                    <HorizontalLine></HorizontalLine>
                    <Box>
                        <ModifyProduct nameIsFill={nameIsFill} dateIsSelected={dateIsSelected}></ModifyProduct>
                        <BuyButton setNameFieldAlert={setNameFieldAlert} setDateAlert={setDateAlert}></BuyButton>
                    </Box>
                </BottomContent>
            </ContentBox>
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