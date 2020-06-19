import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AttributeSection from './AttributeSection/AttributeSection';
import Description from './Description/Description';
import SelectDate from './ModifyProduct/SelectDate/SelectDate';
import BuyButton from './BuySection/BuyButton/BuyButton';
import Basket from '../Basket/Basket';
import { connect } from 'react-redux';
import { setFrameDetails } from '../../redux/actions/setFrameDetails';
import { setPrice } from '../../redux/actions/setPriceAction';
import { setSize } from '../../redux/actions/setSizeActions';
import {useRouter, withRouter} from 'next/router';
import ModifyProduct from './ModifyProduct/ModifyProduct';
import BlurScreen from '../BlurScreen/BlurScreen';
import Header from '../Header/Header';
import Footer from './Footer/Footer';
import Copyright from '../StartPage/Footer/Copyright/Copyright';
import ModifyInfo from './BuySection/ModifyInfo/ModifyInfo';
import ModifyButton from './BuySection/ModifyInfo/ModifyButton';
import FrameSelector from './FrameSelector/FrameSelector';

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 1000px) {
        flex-direction: row;
    }
`
const BottomContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
   
    @media(min-width: 1000px) {
        padding-right: 0px;
    }
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    @media(min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0;
    }
`
const HorizontalLine = styled.div`
    width: 98%;
    height: 1px;
    margin-bottom: 15px;
    background: #E4E7EB;
    @media(max-width: 1000px) {
            display: none;
        }
`
const HorizontalLineHeader = styled.div`
    width: 100%;
    height: 1px;
    margin-bottom: 7px;
    margin-top: 7px;
    background-color: rgba(228, 231, 235, .5);
    @media(max-width: 1000px) {
            display: none;
        }
`
const BottomSection = styled.div`
    width: 100%;
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    @media(min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const Line = styled.div`
    width: 300px;
    height: 1px;
    background-color: rgba(228,231,235,.5);
    margin-top: 38px;
    @media(min-width: 1000px) {
            display: none;
        }
`
const BuyButtonContainer = styled.div`
    @media(min-width: 1000px) {
        display: none;
    }
`

const Product = (props) => {
    const {query: {id, type}} = useRouter();
    const [sizeWithPrice, setSizeWithPrice] = useState('');
    const [initialPrice, setInitialPrice] = useState('');
    const [dateIsSelected, setDateIsSelected] = useState(true);
    const [nameIsFill, setNameIsFill] = useState(true);
    const [growthIsFill, setGrowthIsFill] = useState(true);
    const [weightIsFill, setWeightIsFill] = useState(true);


    const setDateAlert = (val) => {
        setDateIsSelected(val)
    }

    const setNameFieldAlert = (val) => {
        setNameIsFill(val)
    }

    const setGrowthAlert = (val) => {
        setGrowthIsFill(val)
    }
    const setWeightAlert = (val) => {
        setWeightIsFill(val)
    }

    useEffect(() => {
        // set initial data from selected product

// if product data is available in the store, get data. If not, fetch from database
         // fetch data from database
        //  this data can be available in the store if the page has not been refreshed. Use it!!!
         fetch(`http://cudnydzien.pl:8080/${type}`).then(res => res.json()).then(json => {
             Object.values(json).map(el => {
                 if(id == el.productId) {
                     const { 
                         productId,
                         name,
                         image,
                         images,
                         description,
                         shipment,
                         additionalData,
                         size,
                         priceWithSize,
                         price,
                         clientInfo,
                         clientDateIsRequired,
                         clientNameIsRequired,
                         clientWeightIsRequired,
                         clientGrowthIsRequired,
                         clientPlaceIsRequired,
                         clientFatherNameIsRequired,
                         clientMotherNameIsRequired,
                         productWithFrame
                     } = el;
     
                     props.setFrameDetails(
                         productId, 
                         name, 
                         image, 
                         images, 
                         description, 
                         shipment, 
                         additionalData, 
                         price, 
                         clientInfo,
                         clientDateIsRequired, 
                         clientNameIsRequired,
                         clientWeightIsRequired,
                         clientGrowthIsRequired,
                         clientPlaceIsRequired,
                         clientFatherNameIsRequired,
                         clientMotherNameIsRequired,
                         productWithFrame
                         );
                     setSizeWithPrice(priceWithSize);
                     setInitialPrice(price)
                     props.setPrice(price)
                     props.setSize(size)
                 }
             })
         }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <BlurScreen></BlurScreen>
            <Basket></Basket>
            <Header></Header>
            <HorizontalLineHeader></HorizontalLineHeader>
            <ContentBox>
                <AttributeSection initialPrice={initialPrice} sizeWithPrice={sizeWithPrice}></AttributeSection>
                <BottomContent>
                    <Description 
                        setWeightAlert={setWeightAlert} 
                        setGrowthAlert={setGrowthAlert} 
                        setNameFieldAlert={setNameFieldAlert} 
                        setDateAlert={setDateAlert}
                        weightIsFill={weightIsFill} 
                        growthIsFill={growthIsFill} 
                        nameIsFill={nameIsFill} 
                        dateIsSelected={dateIsSelected}
                    ></Description>       
                    <FrameSelector></FrameSelector>             
                    <Box>
                       
                        <BottomSection display={!props.modifySectionIsVisible ? 'flex' : 'none'}>
                            <ModifyButton></ModifyButton>
                            <Line></Line>
                            <BuyButtonContainer>
                                <BuyButton setWeightAlert={setWeightAlert} setGrowthAlert={setGrowthAlert} setNameFieldAlert={setNameFieldAlert} setDateAlert={setDateAlert}></BuyButton>
                            </BuyButtonContainer>
                            <ModifyInfo></ModifyInfo>
                        </BottomSection>
                    </Box>
                </BottomContent>
            </ContentBox>
            <Footer></Footer>
            <Copyright></Copyright>
        </Container>
    )
}

const mapStateToProps = state => ({
    birthday: state.products.birthdayProducts,
    birthProducts: state.products.birthProducts,
    frameColor: state.frameData.frameColor,
    modifySectionIsVisible: state.clientData.modifySectionIsVisible
})

const mapDispatchToProps = {
    setFrameDetails,
    setPrice,
    setSize
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);