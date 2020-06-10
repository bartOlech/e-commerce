import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import ToolTipMessage from '../ToolTip/ToolTip';
import { connect } from 'react-redux';
import { setGrowth } from '../../../../redux/actions/Product/setGrowth';

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
    margin-bottom: 10px;
`

const SetGrowth = (props) => {

    const handleName = (e) => {
        props.setGrowth(e.target.value);
    }

    return (
        <Container>
            {/* <ToolTipMessage marginLeft='72px' msg='Wzrost dziecka'></ToolTipMessage> */}
            <Label color={props.growthIsFill ? '#3B475A' : 'red'}>Długość</Label>
            <Input value={props.clientGrowth} onChange={handleName}></Input>
        </Container>
    )
}

const mapStateToProps = state => ({
    clientGrowth: state.clientData.clientGrowth
})

const mapDispatchToProps = {
    setGrowth
}

export default connect(mapStateToProps, mapDispatchToProps)(SetGrowth);