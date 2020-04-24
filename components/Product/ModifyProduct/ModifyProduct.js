import React from 'react';
import styled from 'styled-components';
import TittleText from './TittleText'
import SelectDate from './SelectDate/SelectDate';
import SetName from './SetName/SetName';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ModifyProduct = (props) => {
    return (
        <Container>
            <TittleText text={'Dostosuj swoje zamówienie'}></TittleText>

            <SetName nameIsFill={props.nameIsFill}></SetName>
            <SelectDate dateIsSelected={props.dateIsSelected}></SelectDate>
        </Container>
    )
}

export default ModifyProduct;