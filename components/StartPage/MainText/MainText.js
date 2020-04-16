import React from 'react';
import styled from 'styled-components';
import HeadText from './HeadText';
import AdditionalText from './AdditionalText';
import TextBox from './TextBox/TextBox';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0 0 10px;
`

const MainText = () => {
    return (
        <Container>
            <TextBox></TextBox>
            <HeadText text='Stwórz swoją kartkę'/>
            <AdditionalText text='Wybierz ramkę'/>
        </Container>
    )
}

export default MainText;