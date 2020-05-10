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
import { FontStyle } from '../../../assets/style/style';
import LeftBox from './DesktopComponents/LeftBox';
import Header from '../Header/Header';

const FormBox = styled.form`
    margin-left: 10px;
`
const DesktopBox = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 1000px) {
        display: none;
    }
`
const DesktopTittle = styled.div`
    font-family: ${FontStyle.family};
    font-weight: 400;
    color: #3B475A;
    font-size: 2em;
    position: absolute;
    top: -60px;
`
const LeftLeftBox = styled.div`
    width: 55%;
    display: flex;
    position: relative;
    border-radius: 5px;
    border: 1px solid #D9D9D9;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
`
const RightSection = styled.div`
    width: 52%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LeftSection = styled.div`
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
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
            <Header></Header>
           
            <DesktopBox>
                <LeftLeftBox>
                    <DesktopTittle>
                        Dane do wysyłki
                    </DesktopTittle>
                    <LeftSection>
                        <Name nameValidate={props.nameValidate}></Name>
                        <Address streetValidate={props.streetValidate} numberValidate={props.numberValidate}></Address>
                        <City codeValidate={props.codeValidate} cityValidate={props.cityValidate}></City>
                        <Phone></Phone>
                    </LeftSection>
                    <RightSection>
                        <Email emailValidate={props.emailValidate}></Email>
                        <Delivery deliveryData={StaticDeliveryData}></Delivery>
                        <ExtraMessage></ExtraMessage>
                    </RightSection> 
                </LeftLeftBox>
                <LeftBox regulationsValidate={props.regulationsValidate}>
                  
                </LeftBox>
            </DesktopBox>
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