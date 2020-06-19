import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';
import { setBasket } from '../../../../redux/actions/Basket/setBasket';
import { setAddProduct } from '../../../../redux/actions/Product/setAddProduct';
import { setQuantity } from '../../../../redux/actions/Product/setQuantity';
import { setAllValidate } from '../../../../redux/actions/Product/setAllValidate';
import _ from 'lodash';
import {useRouter} from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { setClientValidation } from '../../../../redux/actions/Product/setClientValidation';

import { setNewInfo } from '../../../../redux/actions/ClientInfo/setNewInfo';

const Ico = styled.div`
    width: 23px;
    height: 23px;
    background-image: url('../../../static/cart.svg');
    background-repeat: no-repeat;
    background-size: 23px 23px;
    position: absolute;
    top: 12px;
    left: 28px;
    cursor: pointer;
    transition: .5s;
    &:hover {
        left: 25px;
    }
    @media(max-width: 1000px) {
        top: 16px;
        left: 38px;
    }
`
const Container = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 35px;
    margin-bottom: 40px;
    position: relative;
    
    &:hover ${Ico} {
        left: 38px;
    }
    @media(min-width: 1000px) {
        margin-top: 5px;
        margin-top: 0;
        margin-bottom: 0;
        margin: 0;
        margin-top: -5px;
        margin-right: -6px;
    }
`

const Button = styled.button`
    box-sizing: border-box;
    width: 300px;
    height: 60px;
    border: none;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    background-color: #1C1C1C;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    transition: .5s;
    &:hover {
        background-color: #4c5156;
    }
    @media(min-width: 1000px) {
        width: 300px;
        height: 50px;
    }
`


const BuyButton = (props) => {
    const Router = useRouter();
    const{ id, name, image, price, initialPrice, size, productWithFrame, color} = props;

    const addToBasket = () => {
        // const date = `${day.length == 1 ? `0${day}` : day}.${month.length == 1 ? `0${month}` : month}.${year}`;
        const arrayWithClientInfo = [];

        // add value to array if the inputs is empty (is not validate)
        for(let [key, value] of Object.entries(props.obj)) {
            if(value === '') {
                arrayWithClientInfo.push(key)
            }
        }

        props.setClientValidation(arrayWithClientInfo)

        if(arrayWithClientInfo.length > 0) {
            props.setAllValidate(false)
            return
        } else {
            props.setAllValidate(true)
        }

        // product all data in the one object:
        // console.log(props.obj)

        let obj = {
            id,
            uniqId: uuidv4(),
            name,
            image,
            price,
            initialPrice: price,
            size,
            color: [props.color],
            quantity: 1,
            additionalData: [],
            productWithFrame
        };
       
    //    EVERYTHING IS VALIDATE, GO TO BASKET
        props.setBasket(true)

        // add product data to store
        props.setAddProduct(obj, false) 
    }

    return (
        <Container>
            <Button onClick={addToBasket}>DODAJ DO KOSZYKA</Button>
            <Ico onClick={addToBasket}></Ico>
        </Container>
    )
}

const mapStateToProps = state => ({
    id: state.frameData.id,
    name: state.frameData.name,
    color: state.frameData.color,
    image: state.frameData.image,
    size: state.size.size,
    price: state.price.price,
    initialPrice: state.frameData.initialPrice,
    product: state.product.products,
    productWithFrame: state.frameData.productWithFrame,
    obj: state.clientInfo,
    clientInfo: state.frameData.clientInfo,
})
const mapDispatchToProps = {
    setBasket,
    setAddProduct,
    setQuantity,
    setAllValidate,
    setNewInfo,
    setClientValidation
}


export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);