import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';
import { setSize } from '../../../redux/actions/setSizeActions';

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
                props.setPrice(key)
                props.setSize(val.target.value)
            }
        }
    }

    return (
        <Container>
            <Label htmlFor='sizes'>Rozmiar</Label>
            <Select data-testid='select-size' onChange={(val) => handlePrice(val)} id='sizes'>
                {selectSize()}
            </Select>
        </Container>
    )
}

const mapDispatchToProps = {
    setSize
}

const mapStateToProps = state => ({
    size: state.size.size
})

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSize);