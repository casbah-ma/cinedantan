import React from 'react';
import ReactDOM from 'react-dom';
import CastComponent from './CastComponent';
import configureStore from '../store';

import { Provider } from 'react-redux'
const { store } = configureStore()


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><CastComponent /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

