import React from 'react';
import Home from './Home/Home';
import "./styles/main.scss";
import { Route, Switch } from 'react-router-dom';
import History from './History/History';

function App() {
  return (
    <div className="App">
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/history" component={History}/>
        </Switch> 
    </div>
  );
}

export default App;
