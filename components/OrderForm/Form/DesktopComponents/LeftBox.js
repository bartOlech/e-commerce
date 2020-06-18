import React from 'react';
import styled from 'styled-components';
import Regulations from '../FormFields/Regulations';
import SummaryOrder from '../SummaryOrder/SummaryOrder';
import {useRouter} from 'next/router';
import PayButton from '../PayButton';

const Container = styled.div`
    width: 40%;
    height: ${props => props.height};
    @media (max-width: 1000px) {
        display: none;
    }
`
const Box = styled.div`
    width: 100%;
    height: ${props => props.height};
    border: 1px solid rgba(217, 217, 217, .5);
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
`
const PayButtonBox = styled.div`
    display: ${props => props.display};
`

const LeftBox = (props) => {
    const router = useRouter()

    return (
        <Container height={router.query.quantity <= 1 ? '480px' : '500px'}>
            <Box height={router.query.quantity <= 1 ? '330px' : (
                router.query.quantity >= 3 ? '446px' : '350px'
            )}>
                <SummaryOrder orderPrice={router.query.price}></SummaryOrder>
            </Box>
            <Regulations regulationsValidate={props.regulationsValidate}></Regulations>
            <PayButtonBox display={router.query.quantity <= 2 ? 'inline' : 'none'}><PayButton></PayButton></PayButtonBox>
        </Container>
    )
}

export default LeftBox;