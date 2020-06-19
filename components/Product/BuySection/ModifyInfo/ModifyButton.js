import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { setModifyProductIsVisible } from '../../../../redux/actions/Product/setModifyProductIsVisible';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 300px;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    @media (min-width: 1000px) {
        margin: 0;
        margin-right: 7px;
    }
`

const Button = styled.button`
    box-sizing: border-box;
    width: 300px;
    height: 60px;
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
    &:hover {
        background-color: #4c5156;
    }
    @media(min-width: 1000px) {
        width: 300px;
        height: 50px;
    }
`
const TextInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: -10px;
`
const Text = styled.div`
    height: 100px;
    width: 68%;
    font-size: ${props => props.fontSize};
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    /* font-size: 1.1em; */
    font-weight: 300;
    padding-top: 10px;
    transition: .3s;
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
const Ico = styled.div`
    width: 45px;
    height: 45px;
    background-image: url('../../../../static/pencil.svg');
    background-repeat: no-repeat;
    background-size: 45px 45px;
    margin-left: 10px;
    margin-top: 8px;
`


const ModifyButton = (props) => {

    const setCustomize = () => {
        props.setModifyProductIsVisible(true)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    return (
        <Container>
            <TextInfo>
                <Ico></Ico>
                <Text fontSize={props.allIsValidate ? '1.1em' : '1.2em'} color={props.allIsValidate ? FontStyle.color : 'red'}>Przed zakupem dowolnie spersonalizuj swój plakat</Text>
            </TextInfo>
            <ButtonMsgBox onClick={setCustomize}>
                <Button>PERSONALIZUJ</Button>
            </ButtonMsgBox>      
        </Container>
    )
}
const mapStateToProps = state => ({
    allIsValidate: state.clientValidation.allIsValidate
})

const mapDispatchToProps = {
    setModifyProductIsVisible
}


export default connect(mapStateToProps, mapDispatchToProps)(ModifyButton);