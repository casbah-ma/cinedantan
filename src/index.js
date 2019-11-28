import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { message } from 'antd';
import configureStore from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import {version} from '../package.json'

const { store, persistor } = configureStore()

ReactDOM.render(
  
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>

   ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
    onUpdate: registration => {
      const waitingServiceWorker = registration.waiting
  
    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
      message.loading('Updating...', 2.5)
        .then(() => {
        window.location.reload();
      })
 
      }
    }
})


console.log("[VERSION] ", version);

