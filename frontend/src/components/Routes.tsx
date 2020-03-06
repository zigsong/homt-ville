import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import YogaList from "./YogaList";
import YogaPage from './YogaPage';

export default () => (
  <Router>
    <Route exact path="/" component={YogaList} />
    {/* <Route path="/details" component={YogaPage} /> */}
  </Router>
)