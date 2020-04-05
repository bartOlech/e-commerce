import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TextBox = styled.div`
    display: flex;
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
            <TextBox>
                <Text>Wybrana data: </Text>
                <Date>{props.date}</Date>
            </TextBox>
            <AlternateTextBox>
                <AlternateText>Brak wybranej daty, </AlternateText>
                <AlternateDateText>dostępny rok: {props.availableYears.map((el, index) => {
                    return (
                        <Year key={index}>{el}, </Year>
                    )
                })}</AlternateDateText>
            </AlternateTextBox>
        </Container>
    )
}

export default DateResult;