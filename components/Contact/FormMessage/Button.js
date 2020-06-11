import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    width: 200px;
    height: 45px;
    border: none;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    background-color: #1C1C1C;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    margin-left: -25px;
    margin-top: 40px;
    outline: none;
    &:hover {
        background-color: #4c5156;
    }
`

const EmailField = () => {
    return (
        <Container>
            <Button>Prześlij</Button>
        </Container>
    )
}

export default EmailField;
