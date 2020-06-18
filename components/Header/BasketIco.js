import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setBasket } from '../../redux/actions/Basket/setBasket';
import { FontStyle } from '../../assets/style/style';

const Conatiner = styled.div`
    width: 25px;
    height: 25px;
    position: relative;
    padding-right: 20px;
    cursor: pointer;
    margin-right: 180px;
    @media (max-width: 800px) {
        margin-right: 10px;
    }
`
const Ico = styled.div`
    width: 25px;
    height: 25px;
    background-image: url('../../static/basketIco.svg');
    background-repeat: no-repeat;
    background-size: 25px 25px;
    position: absolute;
    left: 0;
    top: 0;
`
const Counter = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    /* color: #2c3238; */
    color: #fff;
    background-color: #303a52;
    font-size: .7em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 15px;
    top: 15px;
    font-family: ${FontStyle.family};
`

const BasketIco = (props) => {
    return (
        <Conatiner data-testid='basket-ico' onClick={() => props.setBasket(true)}>
            <Ico></Ico>
            <Counter>{props.products.length}</Counter>
        </Conatiner>
    )
}

const mapDispatchToProps = {
    setBasket
}
const mapStateToProps = state => ({
    products: state.product.products
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketIco);