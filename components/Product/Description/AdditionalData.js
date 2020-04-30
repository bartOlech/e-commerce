import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`

`
const List = styled.ul`
    max-width: 600px;
`
const Element = styled.li`
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    color: #3B475A;
    margin-bottom: 15px;
    margin-left: -22px;
`

const AdditionalData = (props) => {
    return (
        <Container>
            <List data-tesid='list-of-sizes'>
                {props.additionalData ? (
                    props.additionalData.map((el, index) => {
                        return (
                            <Element key={index}>{el}</Element>
                        )
                    })
                ) : null}
            </List>
        </Container>
    )
}

export default AdditionalData;