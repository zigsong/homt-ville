import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';
import BaseLayout from './components/BaseLayout';
import YogaList from './components/YogaList';
import YogaCommunity from './components/YogaCommunity';
// import YogaPage from './components/YogaPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <BaseLayout contentComponent={<YogaList />}/>} />
        <Route path="/yoga/videos" component={() => <BaseLayout contentComponent={<YogaList />}/>}  />
        <Route path="/yoga/community" component={() => <BaseLayout contentComponent={<YogaCommunity />}/>}  />
        {/* <Route path="/yoga/videos/:branch" component={() => <BaseLayout contentComponent={<YogaPage />}/>}  /> */}
        {/* <Route path="/yoga/community" component={() => <BaseLayout contentComponent={<YogaList />}/>}  /> */}
        {/* <Route path="/yoga/videos" component={() => <BaseLayout contentComponent={<YogaList />}/>}  /> */}

      </Switch>
    </BrowserRouter>
  )  
}

export default App;
