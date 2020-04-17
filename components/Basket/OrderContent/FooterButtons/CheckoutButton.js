import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import Router from 'next/router'

const Ico = styled.div`
    width: 20px;
    height: 15px;
    background-image: url('../../../../static/arrow-white.svg');
    background-size: 20px 15px;
    background-repeat: no-repeat;
    position: absolute;
    top: 11px;
    right: 20px;
    transition: .4s;
`

const Container = styled.div`
    width: 150px;
    height: 38px;
    background-color: #2c3238;

    position: relative;
    cursor: pointer;
    transition: .4s;
    &:hover {
        background-color: #4c5156;
    }
    &:hover ${Ico} {
        right: 10px;
    }
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    color: #fff;
    font-weight: 300;
    position: absolute;
    top: 8px;
    left: 25px;
`

const FooterButtons = () => {

    const payButton = () => {
        // Router.push({
        //     pathname: '/orderform',
        //     query: { 
        //         id: props.id,
        //         name: props.name,
        //         color: props.color,
        //         image: props.image,
        //         size: props.size,
        //         price: props.price,
        //         day: props.day,
        //         month: props.month,
        //         year: props.year
        //      },
        // })
    }

    return (
        <Container onClick={payButton}>
            <Text>Zamawiam</Text>
            <Ico></Ico>
        </Container>
    )
}

export default FooterButtons;