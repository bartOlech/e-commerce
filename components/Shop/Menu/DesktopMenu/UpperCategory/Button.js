import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #555;
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 13px;
    cursor: pointer;
`

const Button = (props) => {

    const changeCategory = () => {
        console.log(`go to ${props.category}`)
    }

    return (
        <Text onClick={changeCategory}>
            {props.category}
        </Text>
    )
}


export default Button;