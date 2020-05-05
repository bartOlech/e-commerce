import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons/Buttons';
import DateResult from './DateResult/DateResult';
// redux
import {connect} from 'react-redux';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px;
`

const SelectDate = (props) => {

    return (
        <Container>
            <Buttons dateIsSelected={props.dateIsSelected}></Buttons>
            <DateResult availableYears={['2001', '2020']} day={props.day} month={props.month} year={props.year}></DateResult>
        </Container>
    )
}

const mapStateToProps = state => ({
    day: state.date.day,
    month: state.date.month,
    year: state.date.year
})

export default connect(mapStateToProps)(SelectDate);