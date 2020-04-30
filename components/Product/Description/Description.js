import React, { useState } from 'react';
import styled from 'styled-components';
import DescriptionText from './DescriptionText';
import DescriptionMenu from './DescriptionMenu';
import DeliveryText from './DeliveryText';
import RefundText from './RefundText';
import ShipmentText from './ShipmentText';
import AdditionalData from './AdditionalData';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 30px 15px 20px 15px;
    position: relative;
`
const ProductData = styled.div`

`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.3em;
    font-weight: 300;
`

const Description = (props) => {
    const [isClicked, setIsClicked] = useState('description')

    const setText = (val) => {
        setIsClicked(val)
    }

    return (
        <Container data-testid='description'>
                        <ProductData>
                            <DescriptionMenu setText={setText} tittle='Opis'></DescriptionMenu>
                            {isClicked === 'description' ? (
                                <React.Fragment>
                                    <DescriptionText description={props.description}></DescriptionText>
                                    <Text tittle='Dodatkowe informacje'>Dodatkowe informacje</Text>
                                    <AdditionalData additionalData={props.additionalData}></AdditionalData>
                                    <ShipmentText shipment={props.shipment}></ShipmentText>
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
    additionalData: state.frameData.additionalData,
    shipment: state.frameData.shipment
})

export default connect(mapStateToProps)(Description);