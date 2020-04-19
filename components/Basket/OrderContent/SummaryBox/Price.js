import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';

const PriceText = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1em;
    font-weight: 400;
    position: absolute;
    bottom: 0;
    right: 0;
`
const AdditionalText = styled.div`
    width: 100px;
    font-family: ${FontStyle.family};
    color: grey;
    font-size: 1em;
    font-weight: 200;
    position: absolute;
    bottom: 0;
    right: 15px;
`

const Price = (props) => {
    return (
        <PriceText>
            <AdditionalText></AdditionalText>{props.price} zł
        </PriceText>
    )
}

const mapStateToProps = state => ({
    price: state.price.price,
})

export default Price;