import React from 'react';
import styled from 'styled-components';
import TittleText from './TittleText';
import { connect } from 'react-redux';
import SelectDate from './SelectDate/SelectDate';
import SetName from './SetName/SetName';
import SetMotherDay from './SetMotherName/SetMotherDay';
import SetFatherDay from './SetFatherName/SetFatherName';
import SetPlace from './SetPlace/SetPlace';
import SetGrowth from './SetGrowth/SetGrowth';
import SetWeight from './SetWeight/SetWeight';

import { capitalizeFirstLetter } from './Functions/FirstLetterUpper';
import InputText from './InputTemplates/InputText';

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

        for(let [key, value] of Object.entries(props.clientInfo)) {
            arr.push(<InputText keyV={key} key={key} name={capitalizeFirstLetter(key)}></InputText>)
        }
        return arr;
    }

    return (
        <Container>
            <TittleText text={'Dostosuj swoje zamówienie'}></TittleText>
            {/* {props.clientNameIsRequired && <SetName nameIsFill={props.nameIsFill}></SetName>}
            {props.clientDateIsRequired && <SelectDate dateIsSelected={props.dateIsSelected}></SelectDate>}
            {props.clientGrowthIsRequired && <SetGrowth growthIsFill={props.growthIsFill}></SetGrowth>}
            {props.clientWeightIsRequired && <SetWeight weightIsFill={props.weightIsFill}></SetWeight>}
            {props.clientMotherNameIsRequired && <SetMotherDay></SetMotherDay>}
            {props.clientFatherNameIsRequired && <SetFatherDay></SetFatherDay>}
            {props.clientPlaceIsRequired && <SetPlace></SetPlace>} */}
            {getInputs()}
        </Container>
    )
}

const mapStateToProps = state => ({
    clientDateIsRequired: state.frameData.clientDateIsRequired,
    clientNameIsRequired: state.frameData.clientNameIsRequired,
    clientWeightIsRequired: state.frameData.clientWeightIsRequired,
    clientGrowthIsRequired: state.frameData.clientGrowthIsRequired,
    clientPlaceIsRequired: state.frameData.clientPlaceIsRequired,
    clientFatherNameIsRequired: state.frameData.clientFatherNameIsRequired,
    clientMotherNameIsRequired: state.frameData.clientMotherNameIsRequired,
    clientInfo: state.frameData.clientInfo,
})

export default connect(mapStateToProps)(ModifyProduct);