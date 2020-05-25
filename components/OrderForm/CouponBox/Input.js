import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { setCouponValue } from '../../../redux/actions/Coupon/setCouponValue';
import { connect } from 'react-redux';

const Container = styled.input`
    width: 200px;
    height: 34px;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    padding-left: 5px;
    border: 1px solid rgba(217,217,217,.5);
    background-color: #F0F0F0;
    color: #3B475A;
    font-size: 1.1em;
    font-weight: 300;
    border-radius: 1px;
    outline: none;
    padding-bottom: 6px;
    box-sizing: border-box;
    &&::placeholder {
        font-family: ${FontStyle.family};
        font-size: .9em;
        font-weight: 300;
    }
`

const Input = (props) => {

    const handleCouponText = (el) => {
        props.setCouponValue(el.target.value)
    }

    return (
        <Container value={props.couponValue} onChange={handleCouponText} placeholder='Kupon rabatowy'>

        </Container>
    )
}

const mapStateToProps = state => ({
    couponValue: state.coupon.couponValue
})

const mapDispatchToProps = {
    setCouponValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);