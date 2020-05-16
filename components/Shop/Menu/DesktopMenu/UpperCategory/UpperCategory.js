import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import { connect } from 'react-redux';
import Button from './Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`
const UpperSection = styled.div`
    display: flex;
`
const BottomSection = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    font-size: 1em;
    font-weight: 300;
    margin-left: ${props => props.margin};
`

const UpperCategory = (props) => {

    return (
        <Container>
            <UpperSection>
                <Text color='#b3b3b3'>PLAKATY /</Text>
                <Text margin='5px' color='#555'>{props.category}</Text>
            </UpperSection>
            <BottomSection>
                <Button category='NOWOŚCI'></Button>
                <Button category='BESTSELERY'></Button>
            </BottomSection>
        </Container>
    )
}

const mapStateToProps = state => ({
    category: state.shop.category
})

export default connect(mapStateToProps)(UpperCategory);