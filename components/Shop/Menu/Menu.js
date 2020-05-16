import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';
import { setShopSection } from '../../../redux/actions/Shop/setShopSection';
import MoreCategory from './MoreCategory/MoreCategory';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  
    margin-top: 10px;
    margin-bottom: 20px;
    @media (min-width: 1000px) {
        display: none;
    }
`
const List = styled.div`
    display: flex;
    list-style: none;
    width: 100%;
    max-width: 350px;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-between;
`
const Li = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.2em;
    font-weight: 300;
    color: #A5A5A5;
    color: ${props => props.color};
    cursor: pointer;
    position: relative;
    &&:hover {
        color: #1C1C1C;
    }
    &&:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${FontStyle.color};
        display: ${props => props.display};
    }
`

const Menu = (props) => {

    const setCategory = (val) => {
        props.setShopSection(val)
    }

    return (
        <Container>
            <List>
                <Li 
                    display={props.category === 'URODZINY' ? 'inline' : 'none'}
                    color={props.category === 'URODZINY' ? '#1C1C1C' : '#A5A5A5'} 
                    onClick={() => setCategory('URODZINY')}
                >Urodziny</Li>
                <Li 
                    display={props.category === 'ROCZNICA' ? 'inline' : 'none'}
                    color={props.category === 'ROCZNICA' ? '#1C1C1C' : '#A5A5A5'} 
                    onClick={() => setCategory('ROCZNICA')}
                >Rocznica</Li>
                <Li 
                    display={props.category === 'NARODZINY' ? 'inline' : 'none'}
                    color={props.category === 'NARODZINY' ? '#1C1C1C' : '#A5A5A5'} 
                    onClick={() => setCategory('NARODZINY')}
                >Narodziny</Li>
                <Li 
                    display={props.category === 'ŚLUB' ? 'inline' : 'none'}
                    color={props.category === 'ŚLUB' ? '#1C1C1C' : '#A5A5A5'} 
                    onClick={() => setCategory('ŚLUB')}
                >Ślub</Li>
            </List>
            <MoreCategory></MoreCategory>
        </Container>
    )
}

const mapStateToProps = state => ({
    category: state.shop.category
})

const mapDispatchToProps = {
    setShopSection
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);