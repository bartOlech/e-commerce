import React from 'react';
import styled from 'styled-components';
import InstagramLink from './InstagramLink';
import ShopLink from './ShopLink';
import Gadgets from './GadgetsLink';

const Container = styled.div`
   width: 100%;
   height: 100%;
   background-color: #F5F5F5;
   box-shadow: 0 -1px 8px -5px #E0E0E0;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const MenuLinks = () => {
    return (
        <Container>
            <ShopLink></ShopLink>
            <Gadgets></Gadgets>
            <InstagramLink></InstagramLink>
        </Container>
    )
}

export default MenuLinks;