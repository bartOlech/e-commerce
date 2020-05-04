import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';
import Tittle from './Tittle';
import Text from './Text';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: 25px;
    @media (min-width: 1000px) {
        display: flex;
        justify-content: center;
    }
`
const DesktopBox = styled.div`
    position: absolute;
    width: 390px;
    background-color: #fff;
    z-index: 3;
    left: -510px;
    right: 0;
    top: 15px;
    margin: 0 auto;
    display: none;
    @media (min-width: 1000px) {
        display: inline
    }
`
const PhoneBox = styled.div`
    display: inline;
    @media (min-width: 1000px) {
            display: none
        }
`

const MainSection = () => {
    return (
        <Container>
           {/* Desktop */}
            <DesktopBox>
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
                 <Text 
                    text='Jednak na wiele lat przed nim budowano terraria dla roślin. Pomysłodawcą był londyński lekarz '
                ></Text>
                 <Text 
                    text='Jednak na wiele lat przed nim budowano terraria dla roślin. Pomysłodawcą był londyński lekarz '
                ></Text>
            </DesktopBox>
            <Photo></Photo>
            {/* Phone */}
            <PhoneBox>
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
                <Text 
                    text='Jednak na wiele lat przed nim budowano terraria dla roślin. Pomysłodawcą był londyński lekarz '
                ></Text>
                <Text 
                    text='Jednak na wiele lat przed nim budowano terraria dla roślin. Pomysłodawcą był londyński lekarz '
                ></Text>
            </PhoneBox>
        </Container>
    )
}

export default MainSection;