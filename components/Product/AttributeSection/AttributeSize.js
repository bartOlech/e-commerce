import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';
import { setSize } from '../../../redux/actions/setSizeActions';
import { setPrice } from '../../../redux/actions/setPriceAction';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #6E6E6E;
    font-size: 1.3em;
    font-weight: 300;
    margin-bottom: 5px;
`
const Option = styled.option`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.6em;
`
const Select = styled.select`
    width: 120px;
    height: 23px;
    background: #e5e5e5;
    border-radius: 1px;
    border: none;
    outline: none;
    font-size: 1.001em;
`

const AttributeSize = (props) => {

    const selectSize = () => {
        // append childs to the Select element
        const options = []
        for (let [key, value] of Object.entries(props.sizeWithPrice)) {
            options.push(<Option key={value} value={value}>{value}</Option>)
        }
        return options;
    }

    const handlePrice = (val) => {
        // change the price if the size has been changed
        for (let [key, value] of Object.entries(props.sizeWithPrice)) {
            if(val.target.value === value) {
                if(props.productWithFrame) {
                    if(value === '30 x 40 cm') {
                        props.setPrice(+key + 20)
                    } else if(value === '21 x 30 cm') {
                        props.setPrice(+key + 10)
                    } else {
                        alert('error with size!!!')
                    }
                } else {
                    props.setPrice(+key)
                }
                props.setSize(val.target.value)
            }
        }
    }

    return (
        <Container>
            <Label htmlFor='sizes'>Format</Label>
            <Select data-testid='select-size' onChange={(val) => handlePrice(val)} id='sizes'>
                {selectSize()}
            </Select>
        </Container>
    )
}

const mapDispatchToProps = {
    setSize,
    setPrice
}

const mapStateToProps = state => ({
    size: state.size.size,
    productWithFrame: state.frameData.productWithFrame,
    price: state.price.price,
})

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSize);