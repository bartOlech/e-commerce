import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ShowCategoryBtn from './ShowCategoryBtn';
import CategoryButton from './CategoryButton';
import { fadeIn } from 'react-animations';

const slideInDownAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
    width: 100%;
    /* max-width: 300px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
const CategoryBox = styled.div`
    width: 100%;
    display: ${props => props.display};
    animation: .4s ${slideInDownAnimation};
    /* position: absolute; */
`

const MoreCategory = () => {
    const [menuCategory, setMenuCategory] = useState(false);

    const menuCategoryToggle = () => {
        setMenuCategory(!menuCategory)
    }

    return (
        <Container>
            <ShowCategoryBtn menuCategoryToggle={menuCategoryToggle}></ShowCategoryBtn>
            <CategoryBox display={menuCategory ? 'inline' : 'none'}>
                <CategoryButton categoryName='fatherMotherDay' name='DZIEŃ OJCA I MATKI'></CategoryButton>
                <CategoryButton categoryName='grandDay' name='DZIEŃ BABCI I DZIADKA'></CategoryButton>
                <CategoryButton categoryName='nameDay' name='IMIENINY'></CategoryButton>
                <CategoryButton categoryName='teacherDay' name='DZIEŃ NAUCZYCIELA'></CategoryButton>
            </CategoryBox>
        </Container>
    )
}

export default MoreCategory;