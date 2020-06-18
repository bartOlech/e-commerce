import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';
import { setBasket } from '../../../../redux/actions/Basket/setBasket';
import { setAddProduct } from '../../../../redux/actions/Product/setAddProduct';
import { setQuantity } from '../../../../redux/actions/Product/setQuantity';
import { setClientDataValidate } from '../../../../redux/actions/Product/setClientDataValidate';
import _ from 'lodash';
import {useRouter} from 'next/router';

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
    // const [counter, setCounter] = useState(true)
    const Router = useRouter();
    const{ day, month, year, id, name, image, price, initialPrice, size, productWithFrame, color} = props;

    const addToBasket = () => {
        const date = `${day.length == 1 ? `0${day}` : day}.${month.length == 1 ? `0${month}` : month}.${year}`;

        let obj = {
            id,
            name,
            image,
            price,
            initialPrice: price,
            size,
            color: [props.color],
            quantity: 1,
            additionalData: [],
            date: [date],
            productWithFrame
        };
        // validate a client name field
       if(props.clientNameIsRequired) {
        if(props.clientName) {
            props.setNameFieldAlert(true)
            props.setClientDataValidate(true)
        } else {
            props.setNameFieldAlert(false)
            props.setClientDataValidate(false)
            return;
        }
       }
       // validate date field
       if(props.clientDateIsRequired) {
        if(props.day) {
            props.setDateAlert(true)
            props.setClientDataValidate(true)
        } else {
            props.setDateAlert(false)
            props.setClientDataValidate(false)
            return;
        }
       }
        // validate growth field
        if(props.clientGrowthIsRequired) {
            if(props.clientGrowth) {
                props.setGrowthAlert(true)
                props.setClientDataValidate(true)
            } else {
                props.setGrowthAlert(false)
                props.setClientDataValidate(false)
                return;
            }
        }
        // validate weight field
        if(props.clientWeightIsRequired) {
            if(props.clientWeight) {
                props.setWeightAlert(true)
                props.setClientDataValidate(true)
            } else {
                props.setWeightAlert(false)
                props.setClientDataValidate(false)
                return;
            }
        }
       
    //    EVERYTHING IS VALIDATE, GO TO BASKET
        props.setBasket(true)
        // add product data to store
        // Check does the object exists already
        if(props.product.length == 0) {
            props.setAddProduct(obj, false)
        } else {
            props.setAddProduct(obj, false)

            
            // Don't add to array, instead increase quantity
            // const arr = props.product;
            // array that include duplicate size of product
            // let ar = [];

            // console.log(props.product)

            // props.product.map((el, index) => {
            //         //if id exists add quantity and price
            //         if(el.id === props.id) {
            //             if(el.size === props.size) {
            //                 arr[index].quantity += 1
                            
            //                 arr[index].price = +price + +arr[index].price
            //                 // arr[index].price = +arr[index].initialPrice + +arr[index].price

            //                 // add color
            //                 arr[index].color.push(props.color)
            //                 // add date
            //                 arr[index].date.push(date)
            //                 props.setQuantity(arr)
            //                 ar.push('arrayIncludeSize')
            //             } else {
            //                 ar.push('ArrayDontIncludeSize')
            //                 // props.setAddProduct(obj, false)
            //             }                                    
            //         } 
            // })
            // const sizeIsInArray = ar.includes('arrayIncludeSize');

            // If sizes is in basket, only add 1 quantity
            // if(!sizeIsInArray) {
            //     props.setAddProduct(obj, false)
            // } else {

            // }
        }
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
    day: state.date.day,
    month: state.date.month,
    year: state.date.year,
    product: state.product.products,
    productWithFrame: state.frameData.productWithFrame,
    // client data
    clientName: state.clientData.clientName,
    clientMotherName: state.clientData.clientMotherName,
    clientFatherName: state.clientData.clientFatherName,
    clientPlace: state.clientData.clientPlace,
    clientGrowth: state.clientData.clientGrowth,
    clientWeight: state.clientData.clientWeight,

    clientDateIsRequired: state.frameData.clientDateIsRequired,
    clientNameIsRequired: state.frameData.clientNameIsRequired,
    clientGrowthIsRequired: state.frameData.clientGrowthIsRequired,
    clientWeightIsRequired: state.frameData.clientWeightIsRequired
})
const mapDispatchToProps = {
    setBasket,
    setAddProduct,
    setQuantity,
    setClientDataValidate
    
}


export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);