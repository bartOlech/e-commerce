import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style'; 
import Router from 'next/router'
 
const Container = styled.div`
    width: 200px;
    display: flex;
    margin-left: 10px;
    margin-bottom: 13px;
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
    font-weight: 300;
`

const Policy = () => {
    return (
        <Container onClick={() => Router.push('/policy')}>
            <Ico></Ico>
            <Text>Polityka prywatności</Text>
        </Container>
    )
}

export default Policy;