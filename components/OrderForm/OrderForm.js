import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Form from './Form/Form';
import SummaryOrder from './Form/SummaryOrder/SummaryOrder';
import PayButton from './Form/PayButton';

const Container = styled.div`

`

const OrderForm = () => {
    // get query
    const router = useRouter()

    return (
        <Container>
            {/* {console.log(router.query)} */}
            <Form></Form>
            <SummaryOrder orderPrice={router.query.price}></SummaryOrder>
            <PayButton></PayButton>
        </Container>
    )
}

export default OrderForm;