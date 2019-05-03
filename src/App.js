import React from 'react';
import Home from './Home/Home';
import "./styles/main.scss";
import { Route, Switch } from 'react-router-dom';
import History from './History/History';
import { Skills } from './Skills/Skills'

function App() {
  return (
    <div className="App">
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/history" component={History}/>
          <Route exact path="/skills" component={Skills}/>
        </Switch> 
    </div>
  );
}

export default App;
