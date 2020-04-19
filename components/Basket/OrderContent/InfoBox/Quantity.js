import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setQuantity } from '../../../../redux/actions/Product/setQuantity';

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
        console.log(props.quantity)
        setQuantity(props.quantity)
    }, [props.quantity])

    const handleQuantity = (e) => {
        const arr = props.product

        props.product.map((el, index) => {
            if(props.id === el.id ) {
                if(e.target.value > 1) {
                    arr[index].quantity = +e.target.value
                    props.setQuantity(arr)
                    setQuantity(e.target.value)
                }
            }
        })

    }

    return (
        <Input onChange={handleQuantity} value={quantity} type='number'></Input>
    )
}

const mapStateToProps = state => ({
    product: state.product.products
})

const mapDispatchToProps = {
    setQuantity
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);   