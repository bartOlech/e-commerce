import React from 'react';
import styled from 'styled-components';
import BenefitsBox from './BenefitsBox';

const Container = styled.div`
    width: 100%;
    /* max-width: 500px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${props => props.margin};
    @media(min-width: 400px) {
        flex-direction: row;
        justify-content: center;
    }
`

const BenefitsInfo = (props) => {
    return (
        <Container margin={props.margin}>
            <BenefitsBox
                image='../../static/Benefits/delivery.svg'
                tittle='DARMOWA DOSTAWA'
                text='Przy zakupach za min. 50 zł'
            ></BenefitsBox>
            <BenefitsBox
                image='../../static/Benefits/save-payment.svg'
                tittle='BEZPIECZNIE PŁATNOŚCI'
                text='Szybkie i bezpieczne płatności'
            ></BenefitsBox>
            <BenefitsBox
                image='../../static/Benefits/quality.svg'
                tittle='NAJWYŻSZA JAKOŚĆ'
                text='Starannie dopracowana produkcja'
            ></BenefitsBox>
        </Container>
    )
}

export default BenefitsInfo;