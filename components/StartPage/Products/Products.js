import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import ProductContainer from './Product/ProductContainer';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    @media (min-width: 1000px) {
        align-items: flex-start;
       
    }
`
const ButtonsBox = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 400px;
    
    /* margin: 0 auto; */
    @media (min-width: 1000px) {
        display: flex;
        width: 30%;
        justify-content: flex-start;
     
    }
`
const Button = styled.div`
    box-sizing: border-box;
    width: 100px;
    height: 100%;
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    background-color: ${props => props.background};
    border: none;
    border-bottom: ${props => props.borderBottom};
    outline: none;
    cursor: pointer;
    text-align: center;
    padding-top: 12px;
    transition: .1s;
    @media (min-width: 1000px) {
        width: 120px;
    }
`
const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 30px;
`

const Products = (props) => {
    const[dimension, setDimension] = useState('URODZINY');
    

    return (
        <Container>     
            <Div>
                <ButtonsBox>
                    <Button onClick={() => {
                        setDimension('URODZINY')
                    }} 
                        borderBottom={dimension === 'URODZINY' ? '3px solid #202020' : 'none'} 
                    >Urodziny</Button>
                    <Button onClick={() => {
                        setDimension('NARODZINY')
                    }}
                        borderBottom={dimension === 'NARODZINY' ? '3px solid #202020' : 'none'} 
                    >Narodziny</Button>
                    <Button onClick={() => {
                        setDimension('ROCZNICA')
                    }}
                        borderBottom={dimension === 'ROCZNICA' ? '3px solid #202020' : 'none'} 
                    >Rocznica</Button>
                </ButtonsBox>
            </Div>
            <ProductContainer products={
                dimension === 'URODZINY' ? props.birthdayProducts : (
                dimension === 'NARODZINY' ? props.birthProducts : props.birthProducts
                )
            }></ProductContainer>
        </Container>
    )
}

const mapStateToProps = state => ({
    birthdayProducts: state.products.birthdayProducts,
    birthProducts: state.products.birthProducts
})

export default connect(mapStateToProps)(Products);