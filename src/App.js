import React from "react";
import { Switch, Route } from "react-router-dom";
import MyMap from './components/MyMap'


function App() {
  return (
    <div className="App">

      <Switch>
      <MyMap/>
            
      </Switch>
    </div>
  );
}

export default App;
