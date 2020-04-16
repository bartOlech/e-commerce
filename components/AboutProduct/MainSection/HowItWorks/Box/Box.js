import React from 'react';
import styled from 'styled-components';
import MainText from './MainText';
import ExtraText from './ExtraText';
import Ico from './Ico';

const Container = styled.div`
    width: 90%;
    max-width: 450px;
    height: 250px;
    background-color: #F4DAD9;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const Box = (props) => {
    return (
        <div  style={{display: 'flex', justifyContent: 'center'}}>
            <Container>
                <Ico image={props.image}></Ico>
                <MainText mainText={props.mainText}></MainText>
                <ExtraText extraText={props.extraText}></ExtraText>
            </Container>
        </div>
    )
}

export default Box;