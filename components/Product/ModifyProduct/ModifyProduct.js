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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* background: rgba(91, 93, 194, .9); */
    padding: 15px;
    padding-top: 0;
    @media (min-width: 1000px) {
        width: 100%;
    }
`

const ModifyProduct = (props) => {
    return (
        <Container>
            <TittleText text={'Dostosuj swoje zamówienie'}></TittleText>
            {props.clientNameIsRequired && <SetName nameIsFill={props.nameIsFill}></SetName>}
            {props.clientDateIsRequired && <SelectDate dateIsSelected={props.dateIsSelected}></SelectDate>}
            {props.clientGrowthIsRequired && <SetGrowth growthIsFill={props.growthIsFill}></SetGrowth>}
            {props.clientWeightIsRequired && <SetWeight weightIsFill={props.weightIsFill}></SetWeight>}
            {props.clientMotherNameIsRequired && <SetMotherDay></SetMotherDay>}
            {props.clientFatherNameIsRequired && <SetFatherDay></SetFatherDay>}
            {props.clientPlaceIsRequired && <SetPlace></SetPlace>}
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

})

export default connect(mapStateToProps)(ModifyProduct);