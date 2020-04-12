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

const Form = () => {
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
            <Name></Name>
            <Address></Address>
            <City></City>
            <Phone></Phone>
            <Email></Email>
            <Delivery deliveryData={StaticDeliveryData}></Delivery>
            <ExtraMessage></ExtraMessage>
            <Regulations></Regulations>
        </FormBox>
    )
}

export default Form;