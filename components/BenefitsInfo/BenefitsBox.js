import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Text from './Text';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 20px 20px 20px;
`

const BenefitsBox = (props) => {
    return (
        <Container>
            <Image image={props.image}></Image>
            <Text tittle={props.tittle} text={props.text}></Text>
        </Container>
    )
}

export default BenefitsBox;