import React from 'react';
import styled from 'styled-components';
import MainText from './MainText';
import TopicField from './TopicField/TopicField';
import EmailField from './EmailField/EmailField';
import Attachment from './Attachment/Attachment';
import Message from './Message/Message';
import Button from './Button';
import Regulations from './Regulations/Regulations';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    @media (min-width: 1000px) {
        margin-bottom: 40px;
        max-width: 800px;
    }
`
const Form = styled.div`
    width: 90%;
    height: 100%;
    border: 1px solid #E6E6E6;
    padding: 25px 0 30px 35px;
    box-sizing: border-box;
`

const FormMessage = () => {
    return (
        <Container>
            <Form>
                <MainText></MainText>
                <TopicField></TopicField>
                <EmailField></EmailField>
                <Attachment></Attachment>
                <Message></Message>
                <Regulations></Regulations>
                <Button></Button>
            </Form>
        </Container>
    )
}

export default FormMessage;
