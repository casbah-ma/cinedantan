import React from 'react';
import ReactDOM from 'react-dom';
import Share from './Share';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Share />, div);
  ReactDOM.unmountComponentAtNode(div);
});

