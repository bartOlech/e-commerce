import React, { useState } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Form from './Form/Form';
import SummaryOrder from './Form/SummaryOrder/SummaryOrder';
import PayButton from './Form/PayButton';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    @media (min-width: 1000px) {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #F5F6F8
    }
`
const PayButtonBox = styled.div`
     @media (min-width: 1000px) {
        display: none;
    }
`
const PhoneBox = styled.div`
    display: inline;
    @media (min-width: 1000px) {
            display: none;
        }
`

const OrderForm = (props) => {
    // validation
    const [streetValidate, setStreetValidate] = useState(true);
    const [numberValidate, setNumberValidate] = useState(true);
    const [codeValidate, setCodeValidate] = useState(true);
    const [cityValidate, setCityValidate] = useState(true);
    const [emailValidate, setEmailValidate] = useState(true);
    const [nameValidate, setNameValidate] = useState(true);
    const [regulationsValidate, setRegulationsValidate] = useState(true);

    const router = useRouter()

    const checkValidation = () => {
        props.streetValidation ? setStreetValidate(true) : setStreetValidate(false);
        props.numberValidation ? setNumberValidate(true) : setNumberValidate(false);
        props.codeValidation ? setCodeValidate(true) : setCodeValidate(false);
        props.cityValidation ? setCityValidate(true) : setCityValidate(false);
        props.emailValidation ? setEmailValidate(true) : setEmailValidate(false);
        props.nameValidation ? setNameValidate(true) : setNameValidate(false);
        props.regulationsValidation ? setRegulationsValidate(true) : setRegulationsValidate(false);
    }

    return (
        <Container>
            {console.log(props.product)}
            <Form 
                streetValidate={streetValidate}
                numberValidate={numberValidate}
                codeValidate={codeValidate}
                cityValidate={cityValidate}
                emailValidate={emailValidate}
                nameValidate={nameValidate}
                regulationsValidate={regulationsValidate}
            ></Form>
            <PhoneBox>
                <SummaryOrder orderPrice={router.query.price}></SummaryOrder>
            </PhoneBox>
            <PayButtonBox>
                <PayButton checkValidation={checkValidation}></PayButton>
            </PayButtonBox>
        </Container>
    )
}

const mapStateToProps = state => ({
    streetValidation: state.validation.street,
    numberValidation: state.validation.number,
    codeValidation: state.validation.code,
    cityValidation: state.validation.city,
    emailValidation: state.validation.email,
    nameValidation: state.validation.name,
    regulationsValidation: state.validation.regulations,
    product: state.product.products
})

export default connect(mapStateToProps)(OrderForm);