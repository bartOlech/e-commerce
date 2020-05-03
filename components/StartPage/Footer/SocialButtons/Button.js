import React from 'react';
import styled from 'styled-components';
import Router from 'next/router'
 
const Ico = styled.a`
    width: 15px;
    height: 15px;
    background-image: url(${props => props.ico});
    background-repeat: no-repeat;
    background-size: 15px 15px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
`

const Button = (props) => {

  

    return (
        <Ico target='blank' href={props.link} ico={props.ico}>
           
        </Ico>
    )
}

export default Button;