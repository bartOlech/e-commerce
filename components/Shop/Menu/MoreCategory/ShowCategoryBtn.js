import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Button = styled.button`
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #d4d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
`
const ArrowIco = styled.div`
    width: 20px;
    height: 20px;
    background-image: url('../../../../static/thin-arrow.svg');
    background-repeat: no-repeat;
    background-size: 20px 20px;
    position: absolute;
    left: 140px;
    bottom: -2px;
    transform: rotate(90deg);
`
const Text = styled.div`
    width: 150px;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    font-size: 1.6em;
    position: relative;
`

const ShowCategoryBtn = (props) => {

    const menuCategoryToggle = () => {
        props.menuCategoryToggle();
    }

    return (
        <Button onClick={menuCategoryToggle}>
           <Text>Więcej kategorii<ArrowIco></ArrowIco></Text> 
        </Button>
    )
}

export default ShowCategoryBtn;