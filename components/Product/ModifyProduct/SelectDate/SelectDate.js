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
            <Buttons validate={props.validate}></Buttons>
            {/* <DateResult availableYears={['2001', '2020']} day={props.day} month={props.month} year={props.year}></DateResult> */}
        </Container>
    )
}

const mapStateToProps = state => ({
   
})

export default connect(mapStateToProps)(SelectDate);