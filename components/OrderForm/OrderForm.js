import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Container = styled.div`

`

const OrderForm = () => {
    const router = useRouter()

    return (
        <Container>
            order form...
            {console.log(router.query)}
        </Container>
    )
}

export default OrderForm;