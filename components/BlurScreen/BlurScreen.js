import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(32,32,32, .4);
    z-index: 5;
    display: ${props => props.display};
`

const BlurScreen = (props) => {
    return (
        <Container display={props.baskedIsOpened ? 'inline' : 'none'}>

        </Container>
    )
}

const mapStateToProps = state => ({
    baskedIsOpened: state.basket.isVisible,
})

export default connect(mapStateToProps)(BlurScreen);