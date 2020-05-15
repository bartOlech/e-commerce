import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import Router from 'next/router';
import { connect } from 'react-redux';

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

const FooterButtons = (props) => {

    const payButton = () => {
        const date = props.day + props.month + props.year;

        Router.push({
            pathname: '/orderform',
            query: { 
                // id: props.id,
                name: props.name,
                // color: props.frameColor,
                // image: props.image,
                // size: props.size,
                price: props.price,
                // day: props.day,
                // month: props.month,
                // year: props.year,
                // clientName: props.clientName,
                // date: date,
                product: props.product
             },
        })
    }

    return (
        <Container onClick={payButton}>
            <Text>Zamawiam</Text>
            <Ico></Ico>
        </Container>
    )
}

const mapStateToProps = state => ({
    id: state.frameData.id,
    name: state.frameData.name,
    image: state.frameData.image,
    frameColor: state.frameData.color,
    size: state.size.size,
    clientName: state.clientData.clientName,
    day: state.date.day,
    month: state.date.month,
    year: state.date.year,
    price: state.price.price,
    product: state.product.products

})

export default connect(mapStateToProps)(FooterButtons);