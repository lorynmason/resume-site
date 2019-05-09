import React from 'react';
import Home from './Home/Home';
import "./styles/main.scss";
import { Route, Switch } from 'react-router-dom';
import History from './History/History';
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects';
import { About } from './About /About';
import { Goals } from './Goals/Goals';

function App() {
  return (
    <div className="App">
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/history" component={History}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/goals" component={Goals}/>
        </Switch> 
    </div>
  );
}

export default App;
