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
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
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
    color: #A8A8A8;
    font-size: 1em;
    padding-top: 1px;
    padding-left: 4px;
`

const Name = (props) => {

    return (
        <Container>
            <div style={{display: 'flex'}}>
            <Text data-testid='text-name'>          
                {props.name} {props.size}
                
            </Text>
            <QuantityText>({props.quantity} x)</QuantityText>
            </div>
           
            <Image image={props.image}></Image>
        </Container>
        
    )
}

export default Name;