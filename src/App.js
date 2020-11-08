import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/:student" component={Home} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
