import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './navBar';
import MiddleText from './middleText';
import Pricing from './pricing';
import AboutUs from './aboutUs';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <MiddleText />
    <Pricing />
    <AboutUs />
  </React.StrictMode>,
  document.getElementById('root')
);
