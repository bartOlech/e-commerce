import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';
import { setShopSection } from '../../../redux/actions/Shop/setShopSection';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
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
                    display={props.category === 'birthday' ? 'inline' : 'none'}
                    color={props.category === 'birthday' ? '#1C1C1C' : '#A5A5A5'} 
                    onClick={() => setCategory('birthday')}
                >Urodziny</Li>
                <Li 
                    display={props.category === 'anniversary' ? 'inline' : 'none'}
                    color={props.category === 'anniversary' ? '#1C1C1C' : '#A5A5A5'} 
                    onClick={() => setCategory('anniversary')}
                >Rocznica</Li>
                <Li 
                    display={props.category === 'birth' ? 'inline' : 'none'}
                    color={props.category === 'birth' ? '#1C1C1C' : '#A5A5A5'} 
                    onClick={() => setCategory('birth')}
                >Narodziny</Li>
                <Li 
                    display={props.category === 'wedding' ? 'inline' : 'none'}
                    color={props.category === 'wedding' ? '#1C1C1C' : '#A5A5A5'} 
                    onClick={() => setCategory('wedding')}
                >Ślub</Li>
            </List>
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