import React from 'react';
import HomePage from './pages/homepage/Homepage';

import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';

const App = () => {
  return ( 
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </Switch>
    </div>
   );
}
 
export default App;
