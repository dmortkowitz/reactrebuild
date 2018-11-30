import React from 'react';
import Mainpage from './Mainpage';
import Marketplace from './Marketplace';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Mainpage} />
      <Route exact path='/marketplace' component={marketplace} />
      <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
