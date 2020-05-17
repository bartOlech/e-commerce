import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import ToolTipMessage from '../ToolTip/ToolTip';
import { connect } from 'react-redux';
import { setWeight } from '../../../../redux/actions/Product/setWeight';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    font-size: 1em;
    margin-bottom: 5px;
`
const Input = styled.input`
    width: 90%;
    max-width: 300px;
    height: 35px;
    border: 1px solid #E3E7F1;
    background-color: #fff;
    color: #555555;
    font-weight: 300;
    font-family: ${FontStyle.family};
    outline: none;
    font-size: 1.3em;
    padding-left: 3px;
    margin-bottom: 10px;
`

const SetWeight = (props) => {

    const handleName = (e) => {
        props.setWeight(e.target.value);
    }

    return (
        <Container>
            {/* <ToolTipMessage marginLeft='72px' msg='Zakupiony produkt będzie miał podane imię'></ToolTipMessage> */}
            <Label color={props.weightIsFill ? '#3B475A' : 'red'}>Waga</Label>
            <Input onChange={handleName}></Input>
        </Container>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    setWeight
}

export default connect(mapStateToProps, mapDispatchToProps)(SetWeight);