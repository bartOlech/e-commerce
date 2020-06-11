import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    margin-bottom: 15px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.1em;
    font-weight: 300;
    padding-bottom: 5px;
`
const Ico = styled.div`
    width: 30px;
    height: 30px;
    background-image: url('../../../../static/Contact/location.svg');
    background-repeat: no-repeat;
    background-size: 30px 30px;
`

const Address = () => {
    return (
        <Container>
            <Ico></Ico>
            <TextBox>
                <Text>CUDNY DZIEN</Text>
                <Text>Kraków</Text>
                <Text>Polska</Text>
            </TextBox>
        </Container>
    )
}

export default Address;
