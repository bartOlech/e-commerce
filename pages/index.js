import React from "react";
import StartPage from '../components/StartPage/StartPage';
import styled from 'styled-components';

import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';


const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Main = (props) => {

  return (
    <Container>
                <button onClick={props.incrementCounter}>Increment</button>
                <button onClick={props.decrementCounter}>Decrement</button>
                <h1>{props.counter}</h1>
      <StartPage></StartPage>
    </Container>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
