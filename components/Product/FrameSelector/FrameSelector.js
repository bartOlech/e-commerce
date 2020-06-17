import React from 'react';
import styled from 'styled-components';
import MainText from './MainText';
import FrameCheckbox from './FrameCheckbox';
import FrameColorCheckbox from './FrameColorCheckbox';

const Container = styled.div`

`
const CheckboxSection = styled.div`
    display: flex;
    flex-direction: column;
`
const HorizontalLine = styled.div`
    width: 95%;
    height: 1px;
    background-color: rgba(228,231,235,.5);
    margin: 0 auto;
    margin-bottom: 15px;
`

const FrameSelector = () => {
    return (
        <Container>
            <HorizontalLine></HorizontalLine>
            <MainText></MainText>
            <CheckboxSection>
                <FrameCheckbox></FrameCheckbox>
                <FrameColorCheckbox></FrameColorCheckbox>
            </CheckboxSection>
        </Container>
    )
}

export default FrameSelector;