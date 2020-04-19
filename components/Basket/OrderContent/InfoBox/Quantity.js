import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setQuantity } from '../../../../redux/actions/Product/setQuantity';
import { setBasket } from '../../../../redux/actions/Basket/setBasket';

const Input = styled.input`
    width: 38px;
    height: 25px;
    border: 1px solid #E1E4E8;
    position: absolute;
    bottom: 0;
    font-size: .9em;
    font-weight: 300;
    padding-left: 4px;
    outline: none;
`

const Image = (props) => {
    const [quantity, setQuantity] = useState(props.quantity)

    useEffect(() => {
        setQuantity(props.quantity)
    }, [props.quantity])

    const handleQuantity = (e) => {
        const arr = props.product

        props.product.map((el, index) => {
            if(props.id === el.id) {
                if(el.size === props.size) {
                    if(e.target.value > 0) {
                        // increase or decrease price
                        if(e.target.value < arr[index].quantity) {
                            arr[index].price =  +arr[index].price - +props.price;
                        } else {
                            arr[index].price =  +arr[index].price + +props.price;
                        }
                        arr[index].quantity = +e.target.value;
                        props.setQuantity(arr)
                        setQuantity(e.target.value)
    
                        props.setBasket(false);
                        props.setBasket(true);
                    }
                }
                // block button if value is < than 1
                
            }
        })

    }

    return (
        <Input onChange={handleQuantity} value={quantity} type='number'></Input>
    )
}

const mapStateToProps = state => ({
    product: state.product.products,
    price: state.price.price,
})

const mapDispatchToProps = {
    setQuantity,
    setBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);   