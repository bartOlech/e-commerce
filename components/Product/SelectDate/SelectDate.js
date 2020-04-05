import React from 'react';
import styled from 'styled-components';
import TittleText from './TittleText';
import Buttons from './Buttons/Buttons';
import DateResult from './DateResult/DateResult';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    margin-bottom: 30px;
`

const SelectDate = () => {

    return (
        <Container>
            <TittleText text={'Dostosuj swoją kartkę'}></TittleText>
            <Buttons></Buttons>
            <DateResult availableYears={['2001', '2020']} date='21.03.2020'></DateResult>
        </Container>
    )
}

export default SelectDate;