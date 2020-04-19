import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';
import { setBasket } from '../../../redux/actions/Basket/setBasket';
import { setAddProduct } from '../../../redux/actions/Product/setAddProduct';
import { setQuantity } from '../../../redux/actions/Product/setQuantity';
import _ from 'lodash';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -5px;
    margin-bottom: 40px;
`

const Button = styled.div`
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
    padding-top: 13px;
    cursor: pointer;
    transition: .5s;
    border: 1px solid #fff;
    &&:hover {
        background-color: #fff;
        border: 1px solid #1C1C1C;
        color: #1C1C1C;
    }
`

const BuyButton = (props) => {
    // const [counter, setCounter] = useState(true)

    const addToBasket = () => {
        let obj = {
            id: props.id,
            name: props.name,
            image: props.image,
            price: props.price,
            size: props.size,
            quantity: 1,
            additionalData: []
        };

        if(props.day) {
            props.checkProduct(true)
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
                                arr[index].price = +props.price + +arr[index].price
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
           
        } else {
            props.checkProduct(false)
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
    day: state.date.day,
    month: state.date.month,
    year: state.date.year,
    product: state.product.products
})
const mapDispatchToProps = {
    setBasket,
    setAddProduct,
    setQuantity
}


export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);