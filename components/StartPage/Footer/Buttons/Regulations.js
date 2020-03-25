import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style'; 
import Router from 'next/router'
 
const Container = styled.div`
    width: 170px;
    display: flex;
    margin-bottom: 18px;
    margin-left: 10px;
    margin-top: 22px;
    cursor: pointer;
`
const Ico = styled.div`
    width: 20px;
    height: 20px;
    background-image: url('../../../../static/arrow.svg');
    background-repeat: no-repeat;
    background-size: 20px 20px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    color: #5F5F5F;
    margin-top: -2px;
`

const Regulations = () => {
    return (
        <Container  onClick={() => Router.push('/regulations')}>
            <Ico></Ico>
            <Text>Regulamin</Text>
        </Container>
    )
}

export default Regulations;