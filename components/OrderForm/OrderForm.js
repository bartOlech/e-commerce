import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Form from './Form/Form';

const Container = styled.div`

`

const OrderForm = () => {
    // get query
    // const router = useRouter()

    return (
        <Container>
            <Form></Form>
        </Container>
    )
}

export default OrderForm;