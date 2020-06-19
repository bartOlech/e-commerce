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

    return (
        <Container>
            <CloseButton></CloseButton>
             <ModifyProduct 
            ></ModifyProduct>
            <ButtonSection>
                <BuyButton></BuyButton>
            </ButtonSection>
        </Container>
    )
}

export default ModifyContainer;