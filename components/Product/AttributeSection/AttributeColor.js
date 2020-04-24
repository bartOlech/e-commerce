import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'
import { connect } from 'react-redux';
import { setFrameColor } from '../../../redux/actions/Product/setFrameColor';


const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #6E6E6E;
    font-size: 1.1em;
    font-weight: 300;
    margin-bottom: 5px;
`
const Option = styled.option`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.6em;
`
const Select = styled.select`
    width: 110px;
    height: 23px;
    background: #e5e5e5;
    border-radius: 1px;
    border: none;
    outline: none;
    font-size: 1.001em;
`

const AttributeColor = (props) => {

    const handleColor = (e) => {
        props.setFrameColor(e.target.value)
  
    }

    return (
        <Container>
           <Label htmlFor='color'>Kolor</Label>
            <Select data-testid='select-size' onChange={handleColor} id='color'>
                {props.frameColorsArr.map((el, index) => {
                    return (
                        <Option key={index} value={el}>{el}</Option>
                    )
                })}
            </Select>
        </Container>
    )
}

const mapStateToProps = state => ({
    frameColorsArr: state.frameData.frameColorsArr,
    frameColors: state.frameData.frameColors
})

const mapDispatchToProps = {
    setFrameColor
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributeColor);