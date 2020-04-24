import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';
import { setShopSection } from '../../../../redux/actions/Shop/setShopSection';

const Button = styled.div`
    width: 100%;
    height: 30px;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    cursor: pointer;
    border-bottom: 1px solid #d4d3d3;
    font-weight: 300;
    font-size: .85em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    &&:hover {
        background-color: #F2F2F2;
    }
`

const CategoryButton = (props) => {

    const changeCategory = () => {
        props.setShopSection(props.categoryName)
    }

    return (
        <Button onClick={changeCategory}>
            {props.name}
        </Button>
    )
}

const mapDispatchToProps = {
    setShopSection
}

export default connect(null, mapDispatchToProps)(CategoryButton);