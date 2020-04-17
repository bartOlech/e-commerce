import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';
import { setBasket } from '../../../redux/actions/Basket/setBasket';
import { setAddProduct } from '../../../redux/actions/Product/setAddProduct';

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

    const addToBasket = () => {
        const obj = {
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
            props.setAddProduct(obj)
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
    year: state.date.year
})
const mapDispatchToProps = {
    setBasket,
    setAddProduct
}


export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);