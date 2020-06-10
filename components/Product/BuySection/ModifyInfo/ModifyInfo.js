import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 300px;
    height: 140px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 40px;
    @media (min-width: 1000px) {
        margin: 0;
        margin-right: 7px;
    }
`
const TextInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: -10px;
    @media (max-width: 1000px) {
        display: none;
    }
`
const Ico = styled.div`
    width: 70px;
    height: 70px;
    background-image: url('../../../../static/paint.svg');
    background-repeat: no-repeat;
    background-size: 70px 70px;
    @media (max-width: 600px) {
        background-size: 55px 55px;
    }
`
const Text = styled.div`
    height: 100px;
    width: 68%;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.1em;
    font-weight: 300;
    padding-top: 10px;
    margin-right: 10px;
`
const ButtonMsgBox = styled.div`
    width: 300px;
    height: 30px;
    margin: 0 auto;
    margin-top: -12px;
    cursor: pointer;
    position: relative;
    /* margin-left: -78px; */

`
const MsgButton = styled.button`
    width: 300px;
    height: 60px;
    font-family: ${FontStyle.family};
    margin: 0 auto;
    color: #fff;
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    /* border-radius: 2px; */
    background-color: #FDAC6B;
    padding-left: 40px;
    cursor: pointer;
    outline: none;
    margin-left: -4px;
    @media(min-width: 1000px) {
        width: 300px;
        height: 50px;
    }
` 
const MsgIco = styled.div`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 18px;
    left: 13px;
    background-image: url('../../../../static/messenger.svg');
    background-repeat: no-repeat;
    background-size: 25px 25px;
`

const ModifyInfo = () => {
    return (
        <Container>
            <TextInfo>
                <Ico></Ico>
                <Text>Możliwość dobrania własnych kolorów oraz czcionek</Text>
            </TextInfo>
            <ButtonMsgBox onClick={() => alert('Send message')}>
                <MsgIco></MsgIco>
                <MsgButton>Napisz do nas wiadomość</MsgButton>
            </ButtonMsgBox>
        </Container>
    )
}

export default ModifyInfo;