import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom"
import PlayerContainer from './PlayerContainer';
import configureStore from '../store';
import history from '../history'
import { Provider } from 'react-redux'

const { store } = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Router history={history}><PlayerContainer /></Router></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

