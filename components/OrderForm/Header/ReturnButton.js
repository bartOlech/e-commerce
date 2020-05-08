import React from 'react';
import styled from 'styled-components';
import { FontStyle} from '../../../assets/style/style';

const Container = styled.button`
   border: none;
   font-family: ${FontStyle.family};
   color: #3B475A;
   font-weight: 300;
   font-size: 1.3em;
   cursor: pointer;
   position: relative;
   margin-right: 20px;
   margin-top: -30px;

   &&:after {
    position: absolute;
    content: '';
    border-bottom: 1px solid #3B475A;
    width: 90%;
    transform: translateX(-50%);
    bottom: 26px;
    left: 50%;
   }
`

const Header = () => {
    return (
        <Container>
            Powrót do sklepu
        </Container>
    )
}

export default Header;