import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import Switch from "react-switch";
import { addFrameToOrder } from '../../../redux/actions/Product/addFrameToOrder';
import { connect } from 'react-redux';
import { removeFromPrice } from '../../../redux/actions/Product/removeFromPrice';
import { addToPrice } from '../../../redux/actions/Product/addToPrice';
import { setFrameColor } from '../../../redux/actions/Product/setFrameColor';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    padding-left: 10px;
`
const Box = styled.div`
    width: 250px;
`
const Label = styled.label`
    padding-left: 10px;
    display: flex;
`
const Span = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
    margin-left: 12px;
    padding-top: 5px;
    cursor: pointer;
    margin-bottom: 51px;
`

const FrameCheckbox = (props) => {

    const handleCheck = () => {
        // enhance the price of a frame if has been selected

        if(!props.productWithFrame) {
            props.setFrameColor('Czarny')
            if(props.size === 'A3 (30x40cm)') {
                props.addToPrice(20)
            } else if(props.size === 'A4 (21x30cm)') {
                props.addToPrice(10)
            } else {
                alert('error with size!!!')
            }
        } else {
            props.setFrameColor('')
            if(props.size === 'A3 (30x40cm)') {
                props.removeFromPrice(20)
            } else if(props.size === 'A4 (21x30cm)') {
                props.removeFromPrice(10)
            } else {
                alert('error with size!!!')
            }
        }

        props.addFrameToOrder(!props.productWithFrame)
    }

    return (
        <Box>
             <Label>
                <Switch 
                    onColor="#FFCFB4"
                    onHandleColor="#ff9f68"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    onChange={handleCheck} 
                    checked={props.productWithFrame} />
                <Span>PLAKAT Z RAMKĄ</Span>
            </Label>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    productWithFrame: state.frameData.productWithFrame,
    size: state.size.size,
    frameColor: state.frameData.color,
})

const mapDispatchToProps = {
    addFrameToOrder,
    addToPrice,
    removeFromPrice,
    setFrameColor
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameCheckbox);