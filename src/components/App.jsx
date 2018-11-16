import React from 'react';
import Mainpage from './Mainpage';
import MarketplaceList from './MarketplaceList';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Mainpage/>
      <Switch>
        <Route exact path='/' component={MarketplaceList} />
        <Route path='/NewBook' component={NewBookForm} />

      </Switch>
    </div>
  );
}

export default App;