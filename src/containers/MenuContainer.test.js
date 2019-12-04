import React from 'react';
import ReactDOM from 'react-dom';
import MenuContainer from './MenuContainer';
import { Router } from "react-router-dom"
import history from '../history'

import configureStore from '../store';

import { Provider } from 'react-redux'
const { store } = configureStore()


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Router history={history}><MenuContainer /></Router></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

