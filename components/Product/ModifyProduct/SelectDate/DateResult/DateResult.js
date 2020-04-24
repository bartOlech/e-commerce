import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TextBox = styled.div`
    display: flex;
    margin-top: 10px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #959595;
    font-size: 1.3em;
    margin-right: 5px;
`
const Date = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.3em;
`
const AlternateTextBox = styled.div`
    display: flex;
`
const AlternateText = styled.div`
    font-family: ${FontStyle.family};
    color: #c03546;
    font-size: 1em;
    margin-right: 5px;
`
const AlternateDateText = styled.div`
    font-family: ${FontStyle.family};
    color: #c03546;
    font-size: 1em;
    display: flex;
`
const Year = styled.div `
    font-family: ${FontStyle.family};
    color: #c03546;
    font-size: 1em;
    margin-left: 5px;
    font-weight: 600;
`

const DateResult = (props) => {

    return (
        <Container>
            {props.day && 
            <TextBox data-testid='text-box'>
                <Text>Wybrana data: </Text>
                <Date data-testid='date'>{props.day.length == 1 ? `0${props.day}` : props.day}.{props.month.length == 1 ? `0${props.month}` : props.month}.{props.year}</Date>
            </TextBox>}
            
            {/* <AlternateTextBox>
                <AlternateText>Brak wybranej daty, </AlternateText>
                <AlternateDateText data-testid='alternate-date'>dostępny rok: {props.availableYears.map((el, index) => {
                    return (
                        <Year data-testid='year' key={index}>{el}, </Year>
                    )
                })}</AlternateDateText>
            </AlternateTextBox> */}
        </Container>
    )
}

export default DateResult;