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
    clientNameIsRequired: state.frameData.clientNameIsRequired
})

export default connect(mapStateToProps)(ModifyProduct);