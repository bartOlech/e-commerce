import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import ShopInfo from './ShopInfo/ShopInfo';
import FormMessage from './FormMessage/FormMessage';
import Footer from '../StartPage/Footer/Copyright/Copyright';

const Container = styled.div`

`
const Hr = styled.div`
    width: 100%;
    height: 1px;
    margin-bottom: 15px;
    background: #E4E7EB;
    margin-top: 20px;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
    }
`

const Contact = () => {
    return (
        <Container>
            <Header></Header>
            <Hr></Hr>
            <Main>
                <FormMessage></FormMessage>
                <ShopInfo></ShopInfo>
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default Contact;
