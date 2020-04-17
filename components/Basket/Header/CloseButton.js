import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 20px;
    height: 20px;
    background-image: url('../../../static/close.svg');
    background-repeat: no-repeat;
    background-size: 20px 20px;
    padding-right: 30px;
    cursor: pointer;
`

const CloseButton = () => {
    return (
        <Container>

        </Container>
    )
}

export default CloseButton;