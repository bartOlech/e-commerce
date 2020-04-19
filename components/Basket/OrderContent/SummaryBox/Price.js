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

const Price = (props) => {
    return (
        <PriceText>
            {props.price} zł
        </PriceText>
    )
}

const mapStateToProps = state => ({
    price1: state.frameData.price,
})

export default connect(mapStateToProps)(Price);