import React from 'react';
import styled from 'styled-components';
import Tittle from './Tittle';
import Text from './Text';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const HeaderText = () => {
    return (
        <Container>
            <Tittle tittle='KARTKA Z KALENDARZA'></Tittle>
            <Text text=' Wykorzystaj nasze wysokiej jakości ramki do plakatów i zdjęć i stwórz kompletną galerię na ścianie. 
                Oferujemy eleganckie ramki do zdjęć w kolorze czarnym, białym i kolorze dębu, a także ramki metalowe w kolorze złotym, srebrnym i miedzianym.
                Ramki są dostępne w ośmiu rozmiarach, od małych ramek do zdjęć o wymiarach 13 x 18 cm, po duże ramki do plakatów o wymiarach 70 x 100 cm.'>
            </Text>
        </Container>
    )
}

export default HeaderText;