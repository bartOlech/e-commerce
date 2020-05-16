import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';
import { setShopSection } from '../../../../redux/actions/Shop/setShopSection';

const TextButton = styled.div`
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    font-size: 1em;
    font-weight: 300;
    padding-bottom: 8px;
    cursor: pointer;
`

const Button = (props) => {
    const changeCategory = () => {
        props.setShopSection(props.selectedCategory)
    }

    return (
        <TextButton color={props.category === props.selectedCategory ? '#1C1C1C' : '#A5A5A5'} onClick={changeCategory}>
            {props.selectedCategory}
        </TextButton>
    )
}

const mapStateToProps = state => ({
    category: state.shop.category
})

const mapDispatchToProps = {
    setShopSection
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);