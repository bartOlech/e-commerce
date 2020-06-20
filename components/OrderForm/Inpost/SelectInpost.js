import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { setInpostVisible } from '../../../redux/actions/Inpost/setInpostVisible';
import { connect } from 'react-redux';

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
    margin-top: 7px;
    outline: none;
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
        <Button type='button' onClick={toggleInpost}>Wybierz paczkomat</Button>
    )
}

const mapDispatchToProps = {
    setInpostVisible
}

export default connect(null, mapDispatchToProps)(SelectInpost);