import React from 'react';
import Mainpage from './Mainpage';
import MarketplaceList from './MarketplaceList';
import { Switch, Route } from 'react-router-dom';
import NewBookForm from './NewBookForm';


function App(){
  return (
    <div>
      <Switch> 
      <Route exact path='/' component={Mainpage} />
      <Route exact path='/marketplacelist' component={MarketplaceList} />
      </Switch>
    </div>
  );
}

export default App;