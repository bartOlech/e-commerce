import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';
import { setDeliveryMethod } from '../../../../redux/actions/setDelivery';

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

const Delivery = (props) => {
    
    const [delivery, setDelivery] = useState('')
    const [deliveryPrice, setDeliveryPrice] = useState('')

    // set initial value to options
    useEffect(() => {
        const initialDeliveryPrice = Object.keys(props.deliveryData)[0];
        const initialDeliveryMethod = props.deliveryData[Object.keys(props.deliveryData)[0]];

        setDeliveryPrice(initialDeliveryPrice);
        setDelivery(initialDeliveryMethod)
        console.log()
        // send data to redux store
        props.setDeliveryMethod(initialDeliveryMethod, initialDeliveryPrice)
    }, [])

    const getOptions = () => {
        const oprions = [];
        for( let[key, value] of Object.entries(props.deliveryData)) {
            oprions.push(<Option key={key} value={value}>{value}</Option>)
        }
        return oprions;
    }
    
    const handleDelivery = (e) => {
        setDelivery(e.target.value)

        

        // set delivery price
        for( let[key, value] of Object.entries(props.deliveryData)) {
            if(e.target.value === value) {
                setDeliveryPrice(key)
                props.setDeliveryMethod(e.target.value, key)
            }
        }
    }

    return (
        <Container>
            <DeliveryBox>
                <Label htmlFor='email'>Metoda dostawy</Label>
                <Select onChange={handleDelivery} type='text' id='email'>
                    {getOptions(props.deliveryData)}
                </Select>
            </DeliveryBox>
        </Container>
    )
}

const mapDispatchToProps = {
    setDeliveryMethod
}

export default connect(null, mapDispatchToProps)(Delivery);