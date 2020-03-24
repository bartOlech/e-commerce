import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 65px;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    margin-top: 20px;
`
const ButtonsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Button = styled.div`
    width: 120px;
    height: 29px;
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    background-color: ${props => props.background};
    border: none;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    text-align: center;
    padding-top: 7px;
`

const Products = () => {
    const[dimension, setDimension] = useState('all')

    return (
        <Container>
            <ButtonsBox>
                <Button onClick={() => setDimension('all')} 
                    color={dimension === 'all' ? '#fff' : '#808080'} 
                    background={dimension === 'all' ? '#FB5C43' : '#F7F7F7'}
                >Wszystkie</Button>
                <Button onClick={() => setDimension('small')}
                    color={dimension === 'small' ? '#fff' : '#808080'} 
                    background={dimension === 'small' ? '#FB5C43' : '#F7F7F7'}
                >Mała</Button>
                <Button onClick={() => setDimension('large')}
                    color={dimension === 'large' ? '#fff' : '#808080'} 
                    background={dimension === 'large' ? '#FB5C43' : '#F7F7F7'}
                >Duża</Button>
            </ButtonsBox>
        </Container>
    )
}

export default Products;