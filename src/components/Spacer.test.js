import React from 'react';
import ReactDOM from 'react-dom';
import Spacer from './Spacer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spacer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

