import React from 'react';
import styled from 'styled-components';
import ModifyProduct from '../ModifyProduct';

const Container = styled.div`

`

const ModifyContainer = (props) => {
    return (
        <Container>
             <ModifyProduct 
                weightIsFill={props.weightIsFill} 
                growthIsFill={props.growthIsFill} 
                nameIsFill={props.nameIsFill} 
                dateIsSelected={props.dateIsSelected}
            ></ModifyProduct>
        </Container>
    )
}

export default ModifyContainer;