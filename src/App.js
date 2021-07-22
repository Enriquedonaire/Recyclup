import React from "react";
import { Switch, Route } from "react-router-dom";
import MapView from './components/MapView'


function App() {
  return (
    <div className="App">

      <Switch>
        <MapView/>
            
      </Switch>
    </div>
  );
}

export default App;

// gigi was here 