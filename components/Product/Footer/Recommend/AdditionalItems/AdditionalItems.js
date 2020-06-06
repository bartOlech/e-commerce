import React, { useEffect } from 'react';
import styled from 'styled-components';
import Text from './Text'
import ItemBox from '../ItemBox/ItemBox';
import { connect } from 'react-redux';
import { getAddtionalItems } from '../../../../../redux/actions/GetFromDatabase/getAdditionalItems';
import Carousel from '@brainhubeu/react-carousel';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    margin-bottom: 70px;
    box-sizing: border-box;
`
const Items = styled.div`
    display: flex;

`

const AdditionalItems = (props) => {

    useEffect(() => {
        // in the future, create collection additionalItems in database
        fetch('http://cudnydzien.pl:8080/getBirthData').then(res => res.json()).then(json => {
           props.getAddtionalItems(json)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Text></Text>
            <Items>
            <Carousel 
                arrows 
                slidesPerPage={5}
                infinite
                breakpoints={{
                    500: {
                        slidesPerPage: 1,
                        arrows: true
                      },
                    800: {
                      slidesPerPage: 2,
                      arrows: true
                    },
                    1000: {
                      slidesPerPage: 3,
                      arrows: true
                    },
                    1200: {
                        slidesPerPage: 5,
                        arrows: true
                      }
                  }}
             >
                {Object.values(props.additionalItems).map((val, index) => {
                    return (
                        <ItemBox category='DODATKI' type={val.type} id={val.productId} hoverImage={val.hoverImage} key={index} image={val.image} name={val.name} price={val.price}></ItemBox>
                    )
                })}
            </Carousel>
                
            </Items>
        </Container>
    )
}

const mapStateToProps = state => ({
    additionalItems: state.products.additionalItems
})

const mapDispatchToProps = {
    getAddtionalItems
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalItems);