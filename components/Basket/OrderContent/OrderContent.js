import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import InfoBox from './InfoBox/InfoBox';
import SummaryBox from './SummaryBox/SummaryBox';
import SummaryCost from './SummaryCost/SummaryCost';
import FooterButtons from './FooterButtons/FooterButtons';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 15px;
`
const Line = styled.div`
    width: 90%;
    height: 1px;
    background-color: #E1E4E8;
    margin: 8px 0 8px 0;
`
const MainSection = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0 10px 0;
    position: relative;
`
const LeftSection = styled.div`
    display: flex;
`

const Basket = () => {
    return (
        <Container>
            <Line></Line>
            <MainSection>
                <LeftSection>
                    <Image></Image>
                    <InfoBox></InfoBox>
                </LeftSection>
                <SummaryBox></SummaryBox>
            </MainSection>
            <Line></Line>
            <SummaryCost></SummaryCost>
            <Line></Line>
            <FooterButtons></FooterButtons>
        </Container>
    )
}

export default Basket;