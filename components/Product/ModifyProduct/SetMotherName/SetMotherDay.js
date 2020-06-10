import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import ToolTipMessage from '../ToolTip/ToolTip';
import { connect } from 'react-redux';
import { setMotherName } from '../../../../redux/actions/Product/setMotherName';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    color: #3B475A;
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
    margin-bottom: 10px;
    &&::placeholder {
        font-family: ${FontStyle.family};
        font-weight: 300;
        font-size: 1em;
        color: #BABABA;
        padding-left: 3px;
    }
`

const SetMotherDay = (props) => {

    const handleName = (e) => {
        props.setMotherName(e.target.value);
    }

    return (
        <Container>
            {/* <ToolTipMessage marginLeft='72px' msg='Zakupiony produkt będzie posiadał '></ToolTipMessage> */}
            <Label>Imię mamy</Label>
            <Input value={props.clientMotherName} placeholder='(nie wymagany)' onChange={handleName}></Input>
        </Container>
    )
}

const mapStateToProps = state => ({
    clientMotherName: state.clientData.clientMotherName
})

const mapDispatchToProps = {
    setMotherName
}

export default connect(mapStateToProps, mapDispatchToProps)(SetMotherDay);