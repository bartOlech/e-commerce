import React from 'react';
import styled from 'styled-components';
import TittleText from './TittleText'
import SelectDate from './SelectDate/SelectDate';
import SetName from './SetName/SetName';
import { connect } from 'react-redux'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ModifyProduct = (props) => {
    return (
        <Container>
            <TittleText text={'Dostosuj swoje zamówienie'}></TittleText>
            {props.clientNameIsRequired && <SetName nameIsFill={props.nameIsFill}></SetName>}
            {props.clientDateIsRequired && <SelectDate dateIsSelected={props.dateIsSelected}></SelectDate>}
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