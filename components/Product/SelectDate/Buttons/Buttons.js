import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

// redux
import {connect} from 'react-redux';
import { setDate } from '../../../../redux/actions/setDateActions';

// calendar

import DatePicker, { registerLocale } from "react-datepicker";
import el from "date-fns/locale/pl"; // the locale you want
registerLocale("pl", el); // register it with the name you want

const Container = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`
const Text = styled.span`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1em;
    margin-bottom: 2px;
`

const Buttons = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = date => {
        setStartDate(date)
        // console.log('date')
        props.setDate('asfasf')
      };

    return (
        <Container>
            <Text>Wybierz datę</Text>
            <div>{props.value}</div>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                dateFormat="dd/MM/yyyy"
                className='data-picker'
                locale='pl'
            />
        </Container>
    )
}

const mapDispatchToProps = {
    setDate: setDate
}

const mapStateToProps = state => ({
    value: state.date.selectedDate
})

export default connect( mapStateToProps, mapDispatchToProps)(Buttons);