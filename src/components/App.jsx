import React from 'react';
import Mainpage from './Mainpage';
import MarketplaceList from './MarketplaceList';
import { Switch, Route } from 'react-router-dom';
import NewBookForm from './NewBookForm';

// <Mainpage />
// <MarketplaceList />
// function App(){
//   return (
//     <div>
//       <Mainpage/>
//       <Switch>
//         <Route exact path='/' component={MarketplaceList} />
//         <Route path='/newbook' component={NewBookForm} />
// 
//       </Switch>
//     </div>
//   );
// }

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