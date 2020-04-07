import React from "react";
import StartPage from '../components/StartPage/StartPage';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Main = () => {

  return (
    <Container>
      <StartPage></StartPage>
    </Container>
  )
}

export default Main;
