import React from 'react';
import styled from 'styled-components';
import ModifyProduct from '../ModifyProduct';
import CloseButton from './CloseButton';
import BuyButton from '../../BuySection/BuyButton/BuyButton';

const Container = styled.div`
    width: 100%;
    margin-bottom: -60px;
    
`
const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

const ModifyContainer = (props) => {

    const setWeightAlert = (val) => {
        props.setWeightAlert(val)
    }
    const setGrowthAlert = (val) => {
        props.setGrowthAlert(val)
    }
    const setNameFieldAlert = (val) => {
        props.setNameFieldAlert(val)
    }
    const setDateAlert = (val) => {
        props.setDateAlert(val)
    }

    return (
        <Container>
            <CloseButton></CloseButton>
             <ModifyProduct 
                weightIsFill={props.weightIsFill} 
                growthIsFill={props.growthIsFill} 
                nameIsFill={props.nameIsFill} 
                dateIsSelected={props.dateIsSelected}
            ></ModifyProduct>
            <ButtonSection>
                <BuyButton setWeightAlert={setWeightAlert} setGrowthAlert={setGrowthAlert} setNameFieldAlert={setNameFieldAlert} setDateAlert={setDateAlert}></BuyButton>
            </ButtonSection>
        </Container>
    )
}

export default ModifyContainer;