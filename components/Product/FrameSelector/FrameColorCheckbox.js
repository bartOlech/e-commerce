import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { setFrameColor } from '../../../redux/actions/Product/setFrameColor';
import { connect } from 'react-redux';

const Container = styled.div`
    margin-top: -30px;
    margin-bottom: 10px;
    @media (min-width: 1000px) {
        margin-top: -40px;
    }
`

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    padding-left: 13px;
    margin-bottom: 10px;
`
const FramesCheckbox = styled.div`
    display: flex;
    justify-content: space-around;
    @media (min-width: 600px) {
        justify-content: center;
    }
`
const FrameBorder = styled.button`
    width: 150px;
    height: 45px;
    border: ${props => props.border};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${FontStyle.family};
    font-size: 1em;
    cursor: pointer;
    background-color: #fff;
    outline: none;
    transition: .4s;
    &&:disabled {
        cursor: default;
    }
    @media (min-width: 600px) {
        margin-left: 5px;
        margin-right: 5px;
    }
`

const FrameColorCheckbox = (props) => {

    const setColor = (val) => {
        props.setFrameColor(val)
    }

    return (
        <Container>
            <Text>Ramka:</Text>
            <FramesCheckbox>
                <FrameBorder disabled={props.productWithFrame ? false : true} border={props.frameColor === 'Czarny' && props.productWithFrame ? '2px solid #2F2F2F' : '1px solid #c3c3c3'} onClick={() => setColor('Czarny')}>CZARNY</FrameBorder>
                <FrameBorder disabled={props.productWithFrame ? false : true} border={props.frameColor === 'Biały' && props.productWithFrame ? '2px solid #2F2F2F' : '1px solid #c3c3c3'} onClick={() => setColor('Biały')}>BIAŁY</FrameBorder>
            </FramesCheckbox>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    frameColor: state.frameData.color,
    productWithFrame: state.frameData.productWithFrame
})

const mapDispatchToProps = {
    setFrameColor
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameColorCheckbox);