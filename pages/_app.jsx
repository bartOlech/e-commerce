import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
import Router from 'next/router';
import 'react-chat-widget/lib/styles.css';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { FontStyle } from '../assets/style/style';

import '@brainhubeu/react-carousel/lib/style.css';

const Chatbot = dynamic(() => import("react-chat-widget").then(mod => mod.Widget), {
  ssr: false
});

const ChatButton = styled.div`
  cursor: pointer;
  text-decoration: underline;
`

import '../assets/style/style.css'
import "react-datepicker/dist/react-datepicker.css";

class MyApp extends App {

    componentDidMount() {
        Router.events.on('routeChangeComplete', () => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        });
        if (typeof window !== 'undefined') { 
          const { addResponseMessage } = require('react-chat-widget'); 
          addResponseMessage("Witaj. Jestem twoim osobistym asystentem.");
          addResponseMessage("Jeśli masz jakieś pytania, pisz śmiało :)");
        }  
      }

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps, store} = this.props;

        const handleNewUserMessage = (newMessage) => {
          if (typeof window !== 'undefined') { 
            
          }  
          const { addResponseMessage } = require('react-chat-widget'); 
          const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                message: newMessage
            }),
            mode: 'cors',
          };
      
          fetch('http://cudnydzien.pl:8080/newMessage', options)
          .then(res => res.json())
          .then(json => {
            addResponseMessage(json.msg);
            if(json.msg1) {
              addResponseMessage(json.msg1)
            }
            if(json.msg2) {
              addResponseMessage(json.msg2)
            }
          })
          .catch(err => console.log(err))
        }

        return (
            <Provider store={store}>
                <Component {...pageProps}/>
                  <Chatbot  
                    handleNewUserMessage={handleNewUserMessage}
                    title="Osobisty asystent sklepu"
                    subtitle={<ChatButton onClick={() => alert('go to contact page')}>Skontaktuj się z nami przez formularz</ChatButton>}
                    showTimeStamp={false}
                    profileAvatar={'../static/robot.svg'}
                    senderPlaceHolder='Napisz wiadomość'
                    fullScreenMode={false}
                    className='classa'
                  />
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);