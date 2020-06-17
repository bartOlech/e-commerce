import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style'
import { connect } from 'react-redux';
import { setFrameColor } from '../../../redux/actions/Product/setFrameColor';


const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.div`
    font-family: ${FontStyle.family};
    color: #6E6E6E;
    font-size: 1.3em;
    font-weight: 300;
    margin-bottom: 3px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
    margin-left: 1px;
`

const AttributeColor = (props) => {

    const handleColor = (e) => {
        props.setFrameColor(e.target.value)
  
    }

    return (
        <Container>
           <Name>Ramka</Name>
           <Text>
               {props.productWithFrame ? props.frameColor : 'Bez ramki'}
           </Text>
        </Container>
    )
}

const mapStateToProps = state => ({
    frameColor: state.frameData.color,
    productWithFrame: state.frameData.productWithFrame
})

const mapDispatchToProps = {
    setFrameColor
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributeColor);