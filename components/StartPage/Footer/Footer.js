import React from 'react';
import styled from 'styled-components';
import Regulations from './Buttons/Regulations';
import Policy from './Buttons/Policy';
import Copyright from './Copyright/Copyright';
// social buttons
import Button from './SocialButtons/Button';
 
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const PolicyButtons = styled.div`
    width: 300px;
    margin-left: 20px;
`
const SocialButtons = styled.div`
    width: 300px;   
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <Container>
            <ButtonBox>
                <PolicyButtons>
                    <Regulations></Regulations>
                    <Policy></Policy>
                </PolicyButtons>
                <SocialButtons>
                    <Button link='https://www.google.com/' ico='../../../static/Social-ico/facebook.svg'></Button>
                    <Button link='https://www.google.com/' ico='../../../static/Social-ico/instagram.svg'></Button>
                    <Button link='https://www.google.com/' ico='../../../static/Social-ico/twitter.svg'></Button>
                </SocialButtons>
            </ButtonBox>
            <Copyright></Copyright>
        </Container>
    )
}

export default Footer;