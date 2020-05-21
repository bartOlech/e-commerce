import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import ToolTipMessage from '../../ToolTip/ToolTip';

// redux
import {connect} from 'react-redux';
import { setDate } from '../../../../../redux/actions/setDateActions';

// calendar

import DatePicker, { registerLocale } from "react-datepicker";
import el from "date-fns/locale/pl"; // the locale you want
registerLocale("pl", el); // register it with the name you want

const Container = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 10px;
    width: 100%;
    max-width: 460px;
`
const Text = styled.span`
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    font-size: 1em;
    margin-bottom: 7px;
    /* margin-left: -220px; */
`


const Buttons = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = date => {
        setStartDate(date)
        const day = date.getDate().toString();
        const month = String(date.getMonth() + 1);
        const year = date.getFullYear().toString();

        props.setDate(day, month, year)
      };

    return (
        <Container>
           {/* <ToolTipMessage marginLeft='90px' msg='Zakupiona kartka z kalendarza będzie miała wybraną datę'></ToolTipMessage> */}
            <Text color={props.dateIsSelected ? '#3B475A' : 'red'}>Wybierz datę</Text>
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
    day: state.date.day,
    month: state.date.month,
    year: state.date.year
})

export default connect( mapStateToProps, mapDispatchToProps)(Buttons);