import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 60px 60px;
    position: absolute;
    top: 20px;
`

const Ico = (props) => {
    return (
        <Container image={props.image}>

        </Container>
    )
}

export default Ico;