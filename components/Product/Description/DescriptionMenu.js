import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    margin-bottom: 10px;
    width: 99%;
    max-width: 500px;
    display: flex;
    margin-top: -15px;
    position: relative;
`
const Tittle = styled.div`
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    font-size: 1.2em;
    font-weight: 300;
    margin-right: 35px;
    padding-top: 1px;
    cursor: pointer;
    border: none;
    border-bottom: ${props => props.borderBottom};
    padding-bottom: 5px;
    &&:hover {
        color: #3B475A;
        border-bottom: 1px solid #6F7982;
    }
`
const Line = styled.div`
    width: 99%;
    height: 1px;
    max-width: 500px;
    background-color: #E4E7EB;
    position: absolute;
    bottom: 0;
    z-index: -1;
`

const DescriptionMenu = (props) => {
    const [isClicked, setIsClicked] = useState('description')

    const selectField = (val) => {
        setIsClicked(val)
        props.setText(val)
    }

    return (
        <Container>
            { console.log(isClicked)}
            <Line></Line>
            <Tittle 
                borderBottom={isClicked === 'description' ? '1px solid #6F7982' : '1px solid #E4E7EB'} 
                color={isClicked === 'description' ? '#3B475A' : '#9F9F9F'}
                onClick={() => selectField('description')}
            >Opis</Tittle>
            <Tittle 
                borderBottom={isClicked === 'delivery' ? '1px solid #6F7982' : '1px solid #E4E7EB'} 
                color={isClicked === 'delivery' ? '#3B475A' : '#9F9F9F'}
                onClick={() => selectField('delivery')}
            >Dostawa</Tittle>
            <Tittle 
                borderBottom={isClicked === 'refund' ? '1px solid #6F7982' : '1px solid #E4E7EB'} 
                color={isClicked === 'refund' ? '#3B475A' : '#9F9F9F'}
                onClick={() => selectField('refund')}
            >Zwrot</Tittle>
        </Container>
    )
}

export default DescriptionMenu;