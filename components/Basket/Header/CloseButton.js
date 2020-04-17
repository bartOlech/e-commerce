import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setBasket } from '../../../redux/actions/Basket/setBasket';

const Container = styled.div`
    width: 20px;
    height: 20px;
    background-image: url('../../../static/close.svg');
    background-repeat: no-repeat;
    background-size: 20px 20px;
    cursor: pointer;
`

const CloseButton = (props) => {
    return (
        <Container onClick={() => props.setBasket(false)}>

        </Container>
    )
}

const mapDispatchToProps = {
    setBasket
}

export default connect(null, mapDispatchToProps)(CloseButton);