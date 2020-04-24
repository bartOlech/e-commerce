import React from 'react';
import styled from 'styled-components';
import TittleText from './TittleText'
import SelectDate from './SelectDate/SelectDate';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ModifyProduct = (props) => {
    return (
        <Container>
            <TittleText text={'Dostosuj swoją kartkę'}></TittleText>

            <SelectDate dateIsSelected={props.dateIsSelected}></SelectDate>
        </Container>
    )
}

export default ModifyProduct;