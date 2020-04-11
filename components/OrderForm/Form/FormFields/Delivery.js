import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 20px;
`   
const DeliveryBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 8px;
    padding-left: 4px;
`
const Select = styled.select`
    width: 96%;
    max-width: 450px;
    height: 45px;
    background-color: #F0F0F0;
    border: none; 
    border-radius: 1px;
    outline: none;
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
    padding-left: 5px;
`
const Option = styled.option`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.5em;
`

const Delivery = () => {
    // from database in the future
    const StaticData = {
        13: 'Paczkomat inPost - 13zł',
        18: 'Paczkomat inPost, Kurier - 18zł',
        15: 'Kurier DPD - 15zł',
        20: 'Kurier DPD pobranie - 20zł',
    }

    const [delivery, setDelivery] = useState('')
    const [deliveryPrice, setDeliveryPrice] = useState('')

    // set initial value to options
    useEffect(() => {
        setDeliveryPrice(Object.keys(StaticData)[0]);
        setDelivery(StaticData[Object.keys(StaticData)[0]])
    }, [])

    const getOptions = () => {
        const oprions = [];
        for( let[key, value] of Object.entries(StaticData)) {
            oprions.push(<Option key={key} value={value}>{value}</Option>)
        }
        return oprions;
    }
    
    const handleDelivery = (e) => {
        setDelivery(e.target.value)

        // set delivery price
        for( let[key, value] of Object.entries(StaticData)) {
            if(e.target.value === value) {
                setDeliveryPrice(key)
            }
        }
    }

    return (
        <Container>
            <DeliveryBox>
                <Label htmlFor='email'>Metoda dostawy</Label>
                <Select onChange={handleDelivery} type='text' id='email'>
                    {getOptions(StaticData)}
                </Select>
            </DeliveryBox>
        </Container>
    )
}

export default Delivery;