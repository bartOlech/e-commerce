import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeaderText from '../../HeaderText/HeaderText';
import Product from '../../../StartPage/Products/Product/Product/Product';
import { connect } from 'react-redux';
import { getBirth } from '../../../../redux/actions/GetFromDatabase/getBirth';

const Container = styled.div`

`
const ProductSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
`

const BirthShop = (props) => {

    useEffect(() => {
        // get products from database if user refresh page
        // get birth products
        fetch('http://localhost:3001/api/getBirthData').then(res => res.json()).then(json => {
           props.getBirth(json)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <HeaderText 
                tittle='NARODZINY'
                text='Wykorzystaj nasze wysokiej jakości ramki do plakatów i zdjęć i stwórz kompletną galerię na ścianie. 
                Oferujemy eleganckie ramki do zdjęć w kolorze czarnym, białym i kolorze dębu, a także ramki metalowe w kolorze złotym, srebrnym i miedzianym.
                Ramki są dostępne w ośmiu rozmiarach, od małych ramek do zdjęć o wymiarach 13 x 18 cm, po'
            ></HeaderText>
            <ProductSection>
                {Object.values(props.birthProducts).map((val, index) => {
                    return (
                        <Product margin='0px 20px 20px 20px' id={val.id} hoverImage={val.hoverImage} key={index} image={val.image} name={val.name} size={val.size} price={val.price}></Product>
                    )
                })}
            </ProductSection>
        </Container>
    )
}

const mapDispatchToProps = {
    getBirth
}

export default connect(null, mapDispatchToProps)(BirthShop);