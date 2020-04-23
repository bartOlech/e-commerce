import React from 'react';
import styled from 'styled-components';
import ExtraProducts from './ExtraProducts';
import ClassicCard from './ClassicCard';
import OwnCard from './OwnCard';

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
            <ClassicCard></ClassicCard>
            <OwnCard></OwnCard>
            <ExtraProducts></ExtraProducts>
        </Container>
    )
}

export default MenuLinks;