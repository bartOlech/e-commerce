import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';
import { setBasket } from '../../../redux/actions/Basket/setBasket';
import { setAddProduct } from '../../../redux/actions/Product/setAddProduct';
import { setQuantity } from '../../../redux/actions/Product/setQuantity';
import _ from 'lodash';
import {useRouter} from 'next/router';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 40px;
    @media(min-width: 1000px) {
        margin-top: 5px;
    }
`

const Button = styled.button`
    box-sizing: border-box;
    width: 300px;
    height: 60px;
    border: none;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.6em;
    background-color: #1C1C1C;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    transition: .5s;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &&:hover {
        background-color: #fff;
        border: 1px solid #1C1C1C;
        color: #1C1C1C;
    }
    @media(min-width: 1000px) {
        width: 250px;
        height: 50px;
    }
`

const BuyButton = (props) => {
    // const [counter, setCounter] = useState(true)
    const Router = useRouter();
    const{ day, month, year, id, name, image, price, initialPrice, size} = props;

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
            date: [date]
        };
        // validate a client name field
       if(props.clientNameIsRequired) {
        if(props.clientName) {
            props.setNameFieldAlert(true)
        } else {
            props.setNameFieldAlert(false)
            return;
        }
       }
       // validate date field
       if(props.clientDateIsRequired) {
        if(props.day) {
            props.setDateAlert(true)
        } else {
            props.setDateAlert(false)
            return;
        }
       }
        // validate growth field
        if(props.clientGrowthIsRequired) {
            if(props.clientGrowth) {
                props.setGrowthAlert(true)
            } else {
                props.setGrowthAlert(false)
                return;
            }
        }
        // validate weight field
        if(props.clientWeightIsRequired) {
            if(props.clientWeight) {
                props.setWeightAlert(true)
            } else {
                props.setWeightAlert(false)
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
            // Don't add to array, instead increase quantity
            const arr = props.product;
            // array that include duplicate size of product
            let ar = [];

            props.product.map((el, index) => {
                    //if id exists add quantity and price
                    if(el.id === props.id) {
                        if(el.size === props.size) {
                            arr[index].quantity += 1
                            arr[index].price = +arr[index].initialPrice + +arr[index].price
                            // add color
                            arr[index].color.push(props.color)
                            // add date
                            arr[index].date.push(date)
                            props.setQuantity(arr)
                            ar.push('arrayIncludeSize')
                        } else {
                            ar.push('ArrayDontIncludeSize')
                            // props.setAddProduct(obj, false)
                        }                                    
                    } 
            })

            const sizeIsInArray = ar.includes('arrayIncludeSize');
            // If sizes is in basket, only add 1 quantity
            if(!sizeIsInArray) {
                props.setAddProduct(obj, false)
            } else {

            }
        }
    }

    return (
        <Container>
            <Button onClick={addToBasket}>Dodaj do koszyka</Button>
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
}


export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);