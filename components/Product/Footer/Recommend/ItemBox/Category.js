import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    font-family: ${FontStyle.family};
    color: #888;
    font-weight: 300;
    font-size: 1.1em;
    margin-bottom: 10px;
    text-align: center;
    width: 160px;
`

const Category = (props) => {
    return (
        <Container>
            {props.category}
        </Container>
    )
}

export default Category;