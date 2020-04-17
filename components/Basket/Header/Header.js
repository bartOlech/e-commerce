import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import CloseButton from './CloseButton';


const Container = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -20px;
`

const Header = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Container>
                <Tittle></Tittle>
                <CloseButton></CloseButton>
            </Container>
        </div>
       
    )
}

export default Header;