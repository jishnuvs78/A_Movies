import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Movies } from './Components/Movies.js';
import './css/app.css';
import { Navbar } from './Components/Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { View } from './Components/View.js';

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route exact path="/view">
              <View />
            </Route>
          </Switch>
        </div>
        
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
