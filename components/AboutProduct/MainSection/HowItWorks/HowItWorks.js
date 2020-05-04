import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import Box from './Box/Box';
import VerticalLine from './Box/VerticalLine';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 30px;
    @media (min-width: 1000px) {
        margin-top: 650px;
    }
`

const HowItWorks = () => {
    return (
        <Container>
            <Tittle></Tittle>
            <Box
                image='../../../../static/3Steps/frame.svg'
                mainText='Wybierz ramkę'
                extraText='W naszym sklepie jest dostępne ponad 10 rodzai obramowań oraz rozmiarów'
            ></Box>
            <VerticalLine></VerticalLine>
            <Box
                image='../../../../static/3Steps/calendar.svg'
                mainText='Dopasuj datę'
                extraText='W łatwy sposób wybierz datę, która ma być na kartce z kalendarza'
            ></Box>
            <VerticalLine></VerticalLine>
            <Box
                image='../../../../static/3Steps/buy.svg'
                mainText='Zamów'
                extraText='Zamów wybrany produkt bez konieczności zakładania konta'
            ></Box>
        </Container>
    )
}

export default HowItWorks;