import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomeR from './routes/HomeR';
import AlbumR from './routes/AlbumR';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={(props) => <HomeR {...props} />} />
        <Route exact path='/album/:id' render={(props) => <AlbumR {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
