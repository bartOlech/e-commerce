import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
// Fields
import Name from './FormFields/Name';
import Address from './FormFields/Address';
import City from './FormFields/City';
import Phone from './FormFields/Phone';
import Email from './FormFields/Email';
import Delivery from './FormFields/Delivery';
import ExtraMessage from './FormFields/ExtraMessage';
import Regulations from './FormFields/Regulations';

const FormBox = styled.form`
    margin-left: 10px;
`

const Form = (props) => {
    // from database in the future
    const StaticDeliveryData = {
        13: 'Paczkomat inPost - 13zł',
        18: 'Paczkomat inPost, Kurier - 18zł',
        15: 'Kurier DPD - 15zł',
        20: 'Kurier DPD pobranie - 20zł',
    }

    return (
        <FormBox>
            <Tittle></Tittle>
            <Name nameValidate={props.nameValidate}></Name>
            <Address streetValidate={props.streetValidate} numberValidate={props.numberValidate}></Address>
            <City codeValidate={props.codeValidate} cityValidate={props.cityValidate}></City>
            <Phone></Phone>
            <Email emailValidate={props.emailValidate}></Email>
            <Delivery deliveryData={StaticDeliveryData}></Delivery>
            <ExtraMessage></ExtraMessage>
            <Regulations regulationsValidate={props.regulationsValidate}></Regulations>
        </FormBox>
    )
}

export default Form;