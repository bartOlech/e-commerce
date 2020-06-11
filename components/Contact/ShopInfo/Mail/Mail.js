import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    margin-bottom: 15px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    font-size: 1.2em;
    font-weight: 300;
    padding-bottom: 5px;
`
const DynamicText = styled.a`
    font-family: ${FontStyle.family};
    color: #B1B1B1;
    font-size: 1.2em;
    font-weight: 300;
    transition: .2s;
    text-decoration: none;
    &&:hover {
        color: #3f3b3b;
        cursor: pointer;
    }
`
const Ico = styled.div`
    width: 30px;
    height: 30px;
    background-image: url('../../../../static/Contact/mail.svg');
    background-repeat: no-repeat;
    background-size: 30px 30px;
`

const Mail = () => {
    return (
        <Container>
            <Ico></Ico>
            <TextBox>
                <Text color={FontStyle.color}>Napisz do nas:</Text>
                <DynamicText href="mailto:cudnydzien@sklep.pl">cudnydzien@sklep.pl</DynamicText>
            </TextBox>
        </Container>
    )
}

export default Mail;
