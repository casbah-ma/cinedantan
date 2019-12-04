import React from 'react';
import ReactDOM from 'react-dom';
import SeoComponent from './SeoComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SeoComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

