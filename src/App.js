import React from 'react';
import HomePage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom';

const HatPage = () => {
  return <div>Hats Page</div>
}

const App = () => {
  return ( 
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/hats" component={HatPage}/>
    </Switch>
   );
}
 
export default App;
