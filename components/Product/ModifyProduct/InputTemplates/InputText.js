import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import {setNewInfo} from '../../../../redux/actions/ClientInfo/setNewInfo';
import { connect } from 'react-redux';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
    margin-bottom: 20px;
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

const InputText = (props) => {

    const handleName = (e) => {
        // add a new key to object in redux
        props.setNewInfo(props.keyV, e.target.value)
       
    }

    return (
        <Container>
            <Label color={props.validate ? 'red' : '#3B475A'}>{props.name}</Label>
            <Input onChange={handleName}></Input>
        </Container>
    )
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = {
    setNewInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(InputText);