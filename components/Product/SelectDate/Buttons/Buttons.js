import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

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

const Buttons = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = date => {
        setStartDate(date)
      };

    return (
        <Container>
            <Text>Wybierz datę</Text>
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

export default Buttons;