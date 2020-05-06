import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Name from './Name';
import AddToBasket from './AddToBasket';
import Category from './Category';
import Price from './Price';

const Container = styled.div`
    width: 160px;
    display: flex;
    flex-direction: column;
    margin-right: 80px;
`
const HorizontalBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const ItemBox = (props) => {
    return (
        <Container>
            <Image hoverImage={props.hoverImage} image={props.image}></Image>
            <HorizontalBox>
                <Name name={props.name}></Name>
                {/* <AddToBasket id={props.id}></AddToBasket> */}
            </HorizontalBox>
            <Category category={props.category}></Category>
            <Price price={props.price}></Price>
        </Container>
    )
}

export default ItemBox;