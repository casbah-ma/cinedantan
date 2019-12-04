import React from 'react';
import ReactDOM from 'react-dom';
import SliderContent from './SliderContent';
import movies from '../../public/database/movies'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SliderContent data={movies}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

