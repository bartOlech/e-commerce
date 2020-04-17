import React, { useState } from 'react';
import styled from 'styled-components';

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

    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    return (
        <Input onChange={handleQuantity} value={quantity} type='number'></Input>
    )
}

export default Image;