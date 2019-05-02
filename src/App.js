import React from 'react';
import Home from './Home/Home';
import "./styles/main.scss";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch> 
          <Route exact path="/" component={Home}/>
          {/* <Route path="/lodging" component={Lodge}/>
          <Route path="/skiff-rentals" component={Skiff}/>
          <Route path="/other-services" component={Other}/>
          <Route path="/about" component={About}/> */}
        </Switch> 
    </div>
  );
}

export default App;
