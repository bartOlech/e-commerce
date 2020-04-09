import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import AttributeSection from './AttributeSection/AttributeSection';
import Description from './Description/Description';
import SelectDate from './SelectDate/SelectDate';
import BuyButton from './BuyButton/BuyButton';
import { connect } from 'react-redux';
import { setFrameDetails } from '../../redux/actions/setFrameDetails';
import { setPrice } from '../../redux/actions/setPriceAction';
import { setSize } from '../../redux/actions/setSizeActions';
import { All as AllData } from '../../assets/FramesData/All';
import {useRouter, withRouter} from 'next/router';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Product = (props) => {
    const {query: {id}} = useRouter();
    const [sizeWithPrice, setSizeWithPrice] = useState('');
    const [initialPrice, setInitialPrice] = useState('')

    // in the future, here getting from database
    useEffect(() => {
        // set initial data from selected product
        AllData.map((el, index) => {
            if(id == el.id) {
                // ZROB DESTRUKTURYZACJE
                const { 
                    id,
                    name,
                    image,
                    images,
                    description,
                    shipment,
                    additionalData,
                    color,
                    size,
                    priceWithSize,
                    price
                } = el;

                props.setFrameDetails(id, name, image, images, description, shipment, additionalData, color, size);
                setSizeWithPrice(priceWithSize);
                setInitialPrice(price)
                props.setPrice(price)
                props.setSize(size)
            }
        })
    }, [])

    return (
        <Container>
            <Header></Header>
            <AttributeSection initialPrice={initialPrice} sizeWithPrice={sizeWithPrice}></AttributeSection>
            <Description></Description>
            <SelectDate></SelectDate>
            <BuyButton></BuyButton>
        </Container>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    setFrameDetails,
    setPrice,
    setSize
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);