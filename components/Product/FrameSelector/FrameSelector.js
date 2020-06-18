import React from 'react';
import styled from 'styled-components';
import MainText from './MainText';
import FrameCheckbox from './FrameCheckbox';
import FrameColorCheckbox from './FrameColorCheckbox';
import { connect } from 'react-redux';

const Container = styled.div`
    display: ${props => props.display};
`
const CheckboxSection = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const HorizontalLine = styled.div`
    width: 95%;
    height: 1px;
    background-color: rgba(228,231,235,.5);
    margin: 0 auto;
    margin-bottom: 15px;
    @media (min-width: 1000px) {
        display: none;
    }
`
const HorizontalLineDesktop = styled.div`
    width: 100%;
    height: 1px;
    margin-bottom: 38px;
    background: #E4E7EB;
    margin-top: 15px;
    @media(max-width: 1000px) {
            display: none;
        }
`

const FrameSelector = (props) => {
    return (
        <Container display={!props.modifySectionIsVisible ? 'inline' : 'none'}>
            <HorizontalLine></HorizontalLine>
            <MainText></MainText>
            <CheckboxSection>
                <FrameCheckbox></FrameCheckbox>
                <FrameColorCheckbox></FrameColorCheckbox>
            </CheckboxSection>
            <HorizontalLine style={{marginTop: '15px', marginBottom: '5px'}}></HorizontalLine>
            <HorizontalLineDesktop></HorizontalLineDesktop>
        </Container>
    )
}

const mapStateToProps = state => ({
    modifySectionIsVisible: state.clientData.modifySectionIsVisible
})

export default connect(mapStateToProps)(FrameSelector);