import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';
import BasketIco from '../../Header/BasketIco';

const Container = styled.div`   
    width: 100%;
    height: 60px;
    display: flex;
    background-color: ${props => props.background};
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
    box-sizing: border-box;
`

const Header = (props) => {
    return (
        <Container background={props.background}>
            <BackButton></BackButton>
            <BasketIco></BasketIco>
        </Container>
    )
}

export default Header;