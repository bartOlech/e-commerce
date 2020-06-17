import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import Switch from "react-switch";
import { addFrameToOrder } from '../../../redux/actions/Product/addFrameToOrder';
import { connect } from 'react-redux';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    padding-left: 10px;
`
const Box = styled.div`
    
`
const Label = styled.label`
    padding-left: 10px;
    display: flex;
`
const Span = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.2em;
    margin-left: 12px;
    padding-top: 4px;
    cursor: pointer;
`

const FrameCheckbox = (props) => {
    const [checked, isChecked] = useState(false);

    const handleCheck = () => {
        isChecked(!checked)
        props.addFrameToOrder(!checked)
    }

    return (
        <Box>
             <Label>
                <Switch onChange={handleCheck} checked={checked} />
                <Span style={{marginBottom: '50px'}}>Plakat z ramką</Span>
            </Label>
        </Box>
    )
}

const mapDispatchToProps = {
    addFrameToOrder
}

export default connect(null, mapDispatchToProps)(FrameCheckbox);