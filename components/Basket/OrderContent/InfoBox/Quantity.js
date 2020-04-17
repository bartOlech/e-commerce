import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 38px;
    height: 25px;
    border: 1px solid #E1E4E8;
    position: absolute;
    bottom: 0;
    font-size: .9em;
    font-weight: 300;
    padding-left: 4px;
    outline: none;
`

const Image = () => {
    return (
        <Input value='1' type='number'></Input>
    )
}

export default Image;