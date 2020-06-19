import React, { useState } from 'react';
import styled from 'styled-components';
import DescriptionText from './DescriptionText';
import DescriptionMenu from './DescriptionMenu';
import DeliveryText from './DeliveryText';
import RefundText from './RefundText';
import ShipmentText from './ShipmentText';
import AdditionalData from './AdditionalData';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';
import BuyButton from '../BuySection/BuyButton/BuyButton';
import ModifyContainer from '../ModifyProduct/ModifyContainer/ModifyContainer';

const Container = styled.div`
    width: 100%;
    /* max-width: 1100px; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 15px 20px 15px;
    box-sizing: border-box;
    position: relative;
    
    @media(min-width: 1000px) {
        padding: 15px 15px 20px 0px;
    }
    
`
const ProductData = styled.div`
    display: ${props => props.display};
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.3em;
    font-weight: 300;
`
const DesktopName = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.4em;
    font-weight: 300;
    margin-top: -7px;
    margin-bottom: 35px;
    display: none;
    @media(min-width: 1000px) {
        display: flex
    }
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    margin-bottom: 15px;
    background: #E4E7EB;
    margin-top: 15px;
    @media(max-width: 1000px) {
            display: none;
        }
`
const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 1000px) {
            display: none;
        }
`

const Description = (props) => {
    const [isClicked, setIsClicked] = useState('description')

    const setText = (val) => {
        setIsClicked(val)
    }

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
        <Container data-testid='description'>
            {/* Modify section */}
            {props.modifySectionIsVisible && <ModifyContainer 
               
            >
            </ModifyContainer>}
            
            <ProductData display={!props.modifySectionIsVisible ? 'inline' : 'none'}>
                <HeaderBox>
                    <DesktopName>{props.name}</DesktopName>
                    <BuyButton></BuyButton>
                </HeaderBox>
                
                <DescriptionMenu setText={setText} tittle='Opis'></DescriptionMenu>
                {isClicked === 'description' ? (
                    <React.Fragment>
                        <DescriptionText description={props.description}></DescriptionText>
                        <Text tittle='Dodatkowe informacje'>Dodatkowe informacje</Text>
                        
                        <AdditionalData additionalData={props.additionalData}></AdditionalData>
                        <ShipmentText shipment={props.shipment}></ShipmentText>
                        <HorizontalLine></HorizontalLine>
                    </React.Fragment>
                ) : null}
                {isClicked === 'delivery' && <DeliveryText></DeliveryText>}
                {isClicked === 'refund' && <RefundText></RefundText>}
            </ProductData>
        </Container>
    )
}

const mapStateToProps = state => ({
    description: state.frameData.description,
    name: state.frameData.name,
    additionalData: state.frameData.additionalData,
    shipment: state.frameData.shipment,
    modifySectionIsVisible: state.clientValidation.modifySectionIsVisible
})

export default connect(mapStateToProps)(Description);