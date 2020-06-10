import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import ToolTipMessage from '../ToolTip/ToolTip';
import { connect } from 'react-redux';
import { setClientNameToProduct } from '../../../../redux/actions/Product/setClientNameToProduct';

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
    max-width: 545px;
    height: 35px;
    border: 1px solid #E3E7F1;
    background-color: rgba(228,231,235,.3);
    color: #555555;
    font-weight: 300;
    font-family: ${FontStyle.family};
    outline: none;
    font-size: 1.3em;
    padding-left: 3px;
`

const SetName = (props) => {

    const handleName = (e) => {
        props.setClientNameToProduct(e.target.value);
    }

    return (
        <Container>
            <Label color={props.nameIsFill ? '#3B475A' : 'red'}>Podaj imię</Label>
            <Input value={props.clientName} onChange={handleName}></Input>
        </Container>
    )
}

const mapStateToProps = state => ({
    clientName: state.clientData.clientName
})

const mapDispatchToProps = {
    setClientNameToProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(SetName);