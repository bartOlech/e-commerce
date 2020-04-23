import React from 'react';
import styled from 'styled-components';
import HeaderText from '../../HeaderText/HeaderText';

import { All as AllData } from '../../../../assets/FramesData/All';
import Product from '../../../StartPage/Products/Product/Product/Product';

const Container = styled.div`

`
const ProductSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
`

const WeddingShop = () => {
    return (
        <Container>
            <HeaderText 
                tittle='ŚLUB'
                text='Wykorzystaj nasze wysokiej jakości ramki do plakatów i zdjęć i stwórz kompletną galerię na ścianie. 
                Oferujemy eleganckie ramki do zdjęć w kolorze czarnym, białym i kolorze dębu, a także ramki metalowe w kolorze złotym, srebrnym i miedzianym.
                Ramki są dostępne w ośmiu rozmiarach, od małych ramek do zdjęć o wymiarach 13 x 18 cm, po'
            ></HeaderText>
            <ProductSection>
                {AllData.map((val, index) => {
                    return (
                        <Product margin='0px 20px 20px 20px' id={val.id} hoverImage={val.hoverImage} key={index} image={val.image} name={val.name} size={val.size} price={val.price}></Product>
                    )
                })}
            </ProductSection>
        </Container>
    )
}

export default WeddingShop;