import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setRemoveProduct } from '../../../../redux/actions/Product/setRemoveProduct';

const Button = styled.div`
    width: 11px;
    height: 11px;
    background-image: url('../../../../static/closeBold.svg');
    background-repeat: no-repeat;
    background-size: 11px 11px;
    cursor: pointer;
`

const CloseButton = (props) => {

    const removeOrder = () => {
        // const arr = [
        //     {
        //         id: 1,
        //         name: 'bart'
        //     },
        //     {
        //         id: 2,
        //         name: 'Wer'
        //     }
        // ]

        // const arr2 = arr.filter(el => el.id !== 1)
        // console.log(arr2)

        props.setRemoveProduct(props.id)
    }

    return (
        <Button onClick={removeOrder}>
            
        </Button>
    )
}

const mapDispatchToProps = {
    setRemoveProduct
}

export default connect(null, mapDispatchToProps)(CloseButton);