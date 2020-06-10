import react from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { connect } from 'react-redux';
import { setModifyProductIsVisible } from '../../../../redux/actions/Product/setModifyProductIsVisible';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    position: relative;
    
`

const Button = styled.button`
    box-sizing: border-box;
    width: 200px;
    height: 40px;
    border: none;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.1em;
    background-color: #1C1C1C;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    margin-right: 26px;
    &:hover {
        background-color: #4c5156;
    }
    @media(min-width: 1000px) {
        position: absolute;
        right: -33px;
        top: 7px;
    }
`

const CloseButton = (props) => {

    const closeSection = () => {
        props.setModifyProductIsVisible(false);
    }

    return (
        <Container>
            <Button onClick={closeSection}>Powrót</Button>
        </Container>
    )
}

const mapDispatchToProps = {
    setModifyProductIsVisible
}

export default connect(null, mapDispatchToProps)(CloseButton);