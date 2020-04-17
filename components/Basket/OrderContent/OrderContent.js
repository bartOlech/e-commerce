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

const Basket = (props) => {

 

    return (
        <Container>
            <Line></Line>
            {props.products.map((el, index) => {
                return(
                    <div key={index} style={{width: '100%', paddingLeft: '10%'}}>
                        <MainSection>
                            <LeftSection>
                                <Image image={el.image}></Image>
                                <InfoBox name={el.name} quantity={el.quantity}></InfoBox>
                            </LeftSection>
                            <SummaryBox price={el.price}></SummaryBox>
                        </MainSection>
                        <Line style={{marginTop: '20px'}}></Line>
                    </div>
                )})}
            <SummaryCost products={props.products}></SummaryCost>
            <Line></Line>
            <FooterButtons></FooterButtons>
        </Container>
    )
}

export default Basket;