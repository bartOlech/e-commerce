import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { setInpostVisible } from '../../../redux/actions/Inpost/setInpostVisible';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around;
`
const Button = styled.button`
    width: 200px;
    height: 35px;
    background-color: #FCC900;
    color: ${FontStyle.color};
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    margin-top: 11px;
    outline: none;
    @media(min-width: 1200px ) {
        margin-left: -20px;
    }
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const BottomText = styled.div`
    color: ${FontStyle.color};
    font-family: ${FontStyle.family};
    font-size: 1em;
`
const UpperText = styled.div`
    color: ${FontStyle.color};
    font-family: ${FontStyle.family};
    font-size: .9em;
    font-weight: 300;
`

const SelectInpost = (props) => {

    const toggleInpost = (e) => {
        props.setInpostVisible()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    return (
        <Container>
            <Button type='button' onClick={toggleInpost}>Wybierz paczkomat</Button>
            <TextBox>
                    <UpperText>Wybrany:</UpperText>
                    {props.lockerAddress ? (
                        <BottomText>{props.lockerAddress}</BottomText>
                    ) : <BottomText>Nie wybrano</BottomText>}
                </TextBox>
        </Container>
    )
}

const mapStateToProps = state => ({
    lockerAddress: state.inpost.lockerAddress
})

const mapDispatchToProps = {
    setInpostVisible
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectInpost);