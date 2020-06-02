import React, { Fragment } from 'react';
import { Router, Route, RouteComponentProps } from 'react-router-dom';
import history from './history';
import BaseLayout from './components/BaseLayout';
import YogaList from './components/YogaList';
import YogaPage from './components/YogaPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router history={history}>
      <BaseLayout />
      {/* <YogaList /> */}
      {/* <Route exact path="/" component={YogaList} />
      <Route path="/yoga/:branch" component={YogaPage} /> */}
    </Router>
  )  
}

export default App;
