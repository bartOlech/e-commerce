import React, { useEffect } from 'react';
import styled from 'styled-components';
import TittleText from './TittleText';
import { connect } from 'react-redux';
import SelectDate from './SelectDate/SelectDate';

import { capitalizeFirstLetter } from './Functions/FirstLetterUpper';
import InputText from './InputTemplates/InputText';
import { setNewInfo } from '../../../redux/actions/ClientInfo/setNewInfo';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* background: rgba(91, 93, 194, .9); */
    padding: 15px;
    padding-top: 0;
    @media (min-width: 1000px) {
        width: 100%;
        padding-left: 0;
    }
    @media (max-width: 600px) {
        padding: 0;
    }
`
const HorizontalLine = styled.div`
    width: 94%;
    height: 1px;
    margin: 0 auto;
    background-color: rgba(228,231,235,.5);
    margin-bottom: 18px;
    margin-top: -5px;
    @media (min-width: 1000px) {
        display: none;
    }
`

const ModifyProduct = (props) => {
    const getInputs = () => { 
        
        let arr = [];
        // return modify product inputs, inputs are in database e.g. imie: true || true means the validation
        for(let [key, value] of Object.entries(props.clientInfo)) {
            if(key === 'data') {
                arr.push(<SelectDate validate={props.validationArr.includes('data')} key={key+1} keyV={key} dateIsSelected={props.dateIsSelected}></SelectDate>)
            } else {
                arr.push(<InputText validate={props.validationArr.includes(key)} keyV={key} key={key} name={capitalizeFirstLetter(key)}></InputText>)
            }
        }
        return arr;
    }

    return (
        <Container>
            <TittleText text={'Dostosuj swoje zamówienie'}></TittleText>
            {getInputs()}
        </Container>
    )
}

const mapStateToProps = state => ({
    clientInfo: state.frameData.clientInfo,
    validationArr: state.clientInfo.validationArr,
})
const mapDispatchToProps = {
    setNewInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProduct);