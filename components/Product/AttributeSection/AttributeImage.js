import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Image = styled.div`
    width: 225px;
    height: 300px;
    background-image: url(${props => props.image});
    background-size: 225px 300px;
    background-repeat: no-repeat;
    margin-left: 10px;
    cursor: pointer;
    transition: .3s;
    border-radius: 2px;
`
const ImagesBox = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`
const SmallImageBox = styled.div`
    width: 55px;
    height: 75px;
    position: relative;
    margin: 0 5px 0 5px;
`
const SmallImage = styled.div`
    width: 55px;
    height: 75px;
    background-image: url(${props => props.image});
    background-size: 55px 75px;
    background-repeat: no-repeat;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
`
const ColorBox = styled.div`
    width: 55px;
    height: 75px;
    background-color: #3B475A;
    position: absolute;
    left: 0;
    top: 0;
    opacity: ${props => props.opacity};
    cursor: pointer;
    transition: .3s;
`

const AttributeImage = (props) => {
    const[clickedImage, setClickedImage] = useState(props.image);

    return (
        <Container >
            <Image image={clickedImage}></Image>
            <ImagesBox data-testid='small-images-box'>
                {props.images.map((el, index) => {
                    return (
                        <SmallImageBox onClick={() => setClickedImage(el)} key={index}>
                            <SmallImage image={el}></SmallImage>
                            <ColorBox opacity={el === clickedImage ? '0' : '.5'}></ColorBox>
                        </SmallImageBox>
                    )
                })}
            </ImagesBox>
        </Container>
    )
}

export default AttributeImage;