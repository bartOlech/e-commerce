import React from 'react';
import styled from 'styled-components';
import Regulations from '../FormFields/Regulations';
import SummaryOrder from '../SummaryOrder/SummaryOrder';
import {useRouter} from 'next/router';

const Container = styled.div`
    width: 40%;
    height: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
`

const LeftBox = (props) => {
    const router = useRouter()

    return (
        <Container>
            <SummaryOrder orderPrice={router.query.price}></SummaryOrder>
            <Regulations regulationsValidate={props.regulationsValidate}></Regulations>
        </Container>
    )
}

export default LeftBox;