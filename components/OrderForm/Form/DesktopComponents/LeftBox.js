import React from 'react';
import styled from 'styled-components';
import Regulations from '../FormFields/Regulations';
import SummaryOrder from '../SummaryOrder/SummaryOrder';
import {useRouter} from 'next/router';
import PayButton from '../PayButton';

const Container = styled.div`
    width: 40%;
    height: 480px;
    @media (max-width: 1000px) {
        display: none;
    }
`
const Box = styled.div`
    width: 100%;
    height: 330px;
    border: 1px solid rgba(217, 217, 217, .5);
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
`

const LeftBox = (props) => {
    const router = useRouter()

    return (
        <Container>
            <Box>
                <SummaryOrder orderPrice={router.query.price}></SummaryOrder>
            </Box>
            <Regulations regulationsValidate={props.regulationsValidate}></Regulations>
            <PayButton></PayButton>
        </Container>
    )
}

export default LeftBox;