import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';
import Tittle from './Tittle';
import Text from './Text';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const MainSection = () => {
    return (
        <Container>
            <Photo></Photo>
            <Tittle></Tittle>
            <Text
             text='Pierwszy las w słoiku stworzył angielski emeryt David Latimer, który w 1960r posadził trzykrotkę w 45 litrowym słoju. Ostatni raz podlał ją w roku 1972, a pochwalił się wyhodowanym lasem w 2013 roku.'
                
            ></Text>
            <Text 
                text='Jednak na wiele lat przed nim budowano terraria dla roślin. Pomysłodawcą był londyński lekarz i botanik Nathaniel Bagshaw Ward. Szacuje się, że w 1829r. '
            ></Text>
               <Text 
                text='Jednak na wiele lat przed nim budowano terraria dla roślin. Pomysłodawcą był londyński lekarz '
            ></Text>
        </Container>
    )
}

export default MainSection;