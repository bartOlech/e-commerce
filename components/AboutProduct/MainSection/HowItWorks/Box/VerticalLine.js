import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 1px;
    height: 50px;
    background-color: #3B475A;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (min-width: 1000px) {
        display: none;
    }
`

const VerticalLine = () => {
    return (
        <Container>
            
        </Container>
    )
}

export default VerticalLine;