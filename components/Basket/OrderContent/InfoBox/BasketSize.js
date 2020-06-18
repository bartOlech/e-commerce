import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontStyle } from '../../../../assets/style/style';

const Size = styled.div`
    font-family: ${FontStyle.family};
    color: grey;
    font-size: 1em;

`

const BasketSize = (props) => {

    return (
        <Size>
            {props.size} {props.productWithFrame ? ' + RAMKA' : ''}
        </Size>
    )
}

const mapStateToProps = state => ({
    product: state.product.products,
    price: state.price.price,
})

export default connect(mapStateToProps)(BasketSize);   