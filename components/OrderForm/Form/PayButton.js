import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';

const Button = styled.button`
    width: 290px;
    height: 55px;
    font-family: ${FontStyle.family};
    color: #fff;
    background-color: #FB5C43;
    border: none;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 50px;
    font-size: 1.3em;
    border-radius: 3px;
    cursor: pointer;
    @media (min-width: 1000px) {
        margin-top: 35px;
        width: 100%;
    }
`

const PayButton = (props) => {

    const goToPayment = () => {
        props.checkValidation()
        // console.log(`street: ${props.street}`)
        // console.log(`number: ${props.number}`)
        // console.log(`code: ${props.code}`)
        // console.log(`city: ${props.city}`)
        // console.log(`email: ${props.email}`)
        // console.log(`name: ${props.name}`)
        // console.log(`phone: ${props.phone}`)
        // console.log(`extraMessage: ${props.message}`)
        // console.log(`delivery: ${props.delivery}`)
    }

    return (
        <Button onClick={goToPayment}>Przejdź do płatności</Button>
    )
}

const mapStateToProps = state => ({
    street: state.validation.street,
    number: state.validation.number,
    code: state.validation.code,
    city: state.validation.city,
    email: state.validation.email,
    name: state.validation.name,
    phone: state.validation.phone,
    message: state.validation.message,
    delivery: state.delivery.delivery,
})

export default connect(mapStateToProps)(PayButton);