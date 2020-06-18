import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    margin-top: -5px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 190px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1em;
    font-weight: 300;
    padding-top: 1px;
`
const Image = styled.div`
    width: 30px;
    height: 40px;
    background-image: url(${props => props.image});
    background-size: 30px 40px;
    background-repeat: no-repeat;

   
`
const QuantityText = styled.div`
    font-family: ${FontStyle.family};
    color: grey;
    font-size: 1em;
    padding-left: 4px;
`

const Name = (props) => {

    return (
        <Container>
            <div style={{display: 'flex'}}>
            <Text data-testid='text-name'>          
                {props.name} 
                {props.productWithFrame ? ' + RAMA' : ''}
                
            </Text>
            <QuantityText>({props.quantity} x)</QuantityText>
            </div>
           
            <Image image={props.image}></Image>
        </Container>
        
    )
}

export default Name;