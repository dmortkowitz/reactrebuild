import React from 'react';
import Mainpage from './Mainpage';
import MarketplaceList from './MarketplaceList';
import { Switch, Route } from 'react-router-dom';
import NewBookForm from './NewBookForm';


function App(){
  return (
    <div>
      <Mainpage/>
      <Switch>
        <Route exact path='/' component={MarketplaceList} />
        <Route path='/newbook' component={NewBookForm} />

      </Switch>
    </div>
  );
}

export default App;