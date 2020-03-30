import React from 'react';
import styled from 'styled-components';
import DescriptionText from './DescriptionText';
import DescriptionTittle from './DescriptionTittle';
import ShipmentText from './ShipmentText';
 // import locally data, change in the future
 import { All as AllData } from '../../../assets/FramesData/All'; 
 import {useRouter, withRouter} from 'next/router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 30px 15px 20px 15px;
    position: relative;
`
const ProductData = styled.div`

`

const Description = () => {
    const {query: {id}} = useRouter();

    return (
        <Container data-testid='description'>
            {AllData.map((el, index) => {
                if(el.id == id) {
                    return (
                        <ProductData key={index}>
                            <DescriptionTittle></DescriptionTittle>
                            <DescriptionText description={el.description}></DescriptionText>
                            <ShipmentText shipment={el.shipment}></ShipmentText>
                        </ProductData>
                    )
                }
            })}
                
        </Container>
    )
}

export default Description;