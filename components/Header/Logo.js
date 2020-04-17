import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../assets/style/style';

const Conatiner = styled.div`
    width: 50px;
    font-family: ${FontStyle.family};
    font-size: 1.7em;
    color: #3C3C3C;
    padding-left: 15px;
`

const Logo = () => {
    return (
        <Conatiner>
            LOGO
        </Conatiner>
    )
}

export default Logo;