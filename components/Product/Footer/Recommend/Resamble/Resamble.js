import React, { useEffect } from 'react';
import styled from 'styled-components';
import Text from './Text'
import ItemBox from '../ItemBox/ItemBox';
import { connect } from 'react-redux';
import { getBirthday } from '../../../../../redux/actions/GetFromDatabase/getBirthday';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 33px;
    margin-top: 45px;
    margin-bottom: 70px;
    @media(max-width: 1000px) {
        display: none;
    }
`
const Items = styled.div`
    display: flex;

`

const Resamble = (props) => {

    useEffect(() => {
        // in the future, create collection additionalItems in database
        fetch('http://localhost:3001/api/getBirthdayData').then(res => res.json()).then(json => {
           props.getBirthday(json)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Text category='URODZINY'></Text>
            <Items>
                {Object.values(props.birthdayData).map((val, index) => {
                    return (
                        <ItemBox category='DODATKI' type={val.type} id={val.productId} hoverImage={val.hoverImage} key={index} image={val.image} name={val.name} price={val.price}></ItemBox>
                    )
                })}
            </Items>
        </Container>
    )
}

const mapStateToProps = state => ({
    birthdayData: state.products.birthdayProducts
})

const mapDispatchToProps = {
    getBirthday
}

export default connect(mapStateToProps, mapDispatchToProps)(Resamble);