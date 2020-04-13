import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { FontStyle } from '../../../../assets/style/style';

const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #3B475A;
    font-size: 1.1em;
    margin-bottom: 20px;
    margin-top: -5px; 
`

const Name = () => {
    // get query
    const router = useRouter()
    const { day, month, year, name, size } = router.query;

    return (
        <Text data-testid='text-name'>
            {name} {size} ({day.length == 1 ? `0${day}` : day}.{month.length == 1 ? `0${month}` : month}.{year})
        </Text>
    )
}

export default Name;