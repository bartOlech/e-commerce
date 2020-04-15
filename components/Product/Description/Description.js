import React, { useState } from 'react';
import styled from 'styled-components';
import DescriptionText from './DescriptionText';
import DescriptionMenu from './DescriptionMenu';
import DeliveryText from './DeliveryText';
import RefundText from './RefundText';
import ShipmentText from './ShipmentText';
 // import locally data, change in the future
 import { All as AllData } from '../../../assets/FramesData/All'; 
 import {useRouter, withRouter} from 'next/router';
 import AdditionalData from './AdditionalData';
 import { FontStyle } from '../../../assets/style/style';

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

const Description = () => {
    const {query: {id}} = useRouter();
    const [isClicked, setIsClicked] = useState('description')

    const setText = (val) => {
        setIsClicked(val)
    }

    return (
        <Container data-testid='description'>
            {AllData.map((el, index) => {
                if(el.id == id) {
                    return (
                        <ProductData key={index}>
                            <DescriptionMenu setText={setText} tittle='Opis'></DescriptionMenu>
                            {isClicked === 'description' ? (
                                <React.Fragment>
                                    <DescriptionText description={el.description}></DescriptionText>
                                    <Text tittle='Dodatkowe informacje'>Dodatkowe informacje</Text>
                                    <AdditionalData additionalData={el.additionalData}></AdditionalData>
                                    <ShipmentText shipment={el.shipment}></ShipmentText>
                                </React.Fragment>
                            ) : null}
                          {isClicked === 'delivery' && <DeliveryText></DeliveryText>}
                          {isClicked === 'refund' && <RefundText></RefundText>}
                        </ProductData>
                    )
                }
            })}
                
        </Container>
    )
}

export default Description;