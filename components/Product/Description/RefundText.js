import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    color: #3E4449;
    font-weight: 300;
    line-height: 1.2em;
    margin-top: -3px;
`

const RefundText = (props) => {
    return (
        <Container>
             <Text>
                Oferujemy bezproblemowe zwroty w terminie 14 dni od otrzymania towaru. 
            </Text>
            <Text>
                Koszt zwrotu pokrywa kupujący, a produkt należy odesłać pod adres :
            </Text>
            <Text>
                Kartka z kalendarza
            </Text>
            <Text>
                Pocztowa 123 c
            </Text>
            <Text>
                33-122, Kraków
            </Text>
        </Container>
    )
}

export default RefundText;