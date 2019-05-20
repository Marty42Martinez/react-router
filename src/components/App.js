import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Red from './colors/Red';
import Yellow from './colors/Yellow';
import Blue from './colors/Blue';

export default function App() {
  return (
    <Router>
      <Route path="/red" component={Red} />
      <Route path="/yellow" component={Yellow} />
      <Route path="/blue" component={Blue} />
    </Router>
  );
}
