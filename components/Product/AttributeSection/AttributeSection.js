import React, { useState } from 'react';
import styled from 'styled-components';
import AttributeName from './AttributeName';
import AttributePrice from './AttributePrice';
import AttributeImage from './AttributeImage';
import AttributeSize from './AttributeSize';
import AttributeColor from './AttributeColor';
import { connect } from 'react-redux';
import { setPrice } from '../../../redux/actions/setPriceAction';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(233, 232, 235, .5);
    padding-bottom: 20px;
    position: relative;
    /* box-shadow: 0 2px 12px -8px rgba(59, 71, 90, .2); */
    box-shadow: 0 3px 5px rgb(245, 243, 243, .7);
`
const Details = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const ImageBox = styled.div`

`
const TextDetails = styled.div`
    width: 150px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 20px;
`
const HeartIco = styled.div`
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background-color: #FB5C43;
    box-shadow: 0 1px 8px #FB5C43;
    position: absolute;
    bottom: -30px;
    right: 19px;
    &&:before {
        content: '';
        width: 28px;
        height: 28px;
        background-image: url('../../../static/heart.svg');
        background-repeat: no-repeat;
        background-size: 28px 28px;
        position: absolute;
        top: 17px;
        left: 17px;
    }
;

`

const AttributeSection = (props) => {
    const [selectedPrice, setSelectedPrice] = useState('')

    const setPrice = (val) => {
        setSelectedPrice(val)
        props.setPrice(val)
    }
   
    return (
        <Container>
            <AttributeName name={props.name}></AttributeName>
            <Details>
                <ImageBox>
                    <AttributeImage images={props.images} image={props.image}></AttributeImage>
                </ImageBox>
                <TextDetails>
                    <AttributePrice data-testid='attribute-section-price'  price={selectedPrice ? selectedPrice : props.initialPrice}></AttributePrice>
                    <AttributeColor frameColors={props.frameColors} color={props.color}></AttributeColor>
                    <AttributeSize setPrice={setPrice} sizeWithPrice={props.sizeWithPrice}></AttributeSize>
                </TextDetails>
            </Details>
            <HeartIco></HeartIco>
        </Container>
    )
}

const mapStateToProps = state => ({
    name: state.frameData.name,
    color: state.frameData.color,
    image: state.frameData.image,
    images: state.frameData.images,
    size: state.size.size,
    price: state.price.price,
    id: state.frameData.id,
})

const mapDispatchToProps = {
    setPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSection);