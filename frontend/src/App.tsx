import React, { Fragment } from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';
import BaseLayout from './components/BaseLayout';
import YogaList from './components/YogaList';
import YogaPage from './components/YogaPage';
import YogaCommunity from './components/YogaCommunity';
import Signup from './components/accounts/Signup';
import Login from './components/accounts/Login';

function App() {
  return (
    <Router history={history}>
        <Route exact path="/" component={() => <BaseLayout contentComponent={<YogaList />}/>} />
        <Route exact path="/yoga" component={() => <BaseLayout contentComponent={<YogaList />}/>} />
        <Route path="/yoga/:branch/videos" component={() => <BaseLayout contentComponent={<YogaPage />}/>}  />
        <Route path="/yoga/community" component={() => <BaseLayout contentComponent={<YogaCommunity />}/>}  />
        <Route path="/signup" component={() => <BaseLayout contentComponent={<Signup />}/>}  />
        <Route path="/login" component={() => <BaseLayout contentComponent={<Login />}/>}  />

        {/* <Route path="/yoga/videos/:branch" component={() => <BaseLayout contentComponent={<YogaPage />}/>}  /> */}
        {/* <Route path="/yoga/community" component={() => <BaseLayout contentComponent={<YogaList />}/>}  /> */}
        {/* <Route path="/yoga/videos" component={() => <BaseLayout contentComponent={<YogaList />}/>}  /> */}
    </Router>
  )  
}

export default App;
