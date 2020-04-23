import React from 'react';
import styled from 'styled-components';
import Birthday from './Birthday';
import Anniversary from './Anniversary';
import Birth from './Birth';

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
            <Birthday></Birthday>
            <Anniversary></Anniversary>
            <Birth></Birth>
          
        </Container>
    )
}

export default MenuLinks;