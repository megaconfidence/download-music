/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomeR from './routes/HomeR';
import AlbumR from './routes/AlbumR';
import TopBar from './components/TopBar';
import SongR from './routes/SongR';
import mq from './components/mq';
import ArtistR from './routes/ArtistR';
import SearchR from './routes/SearchR';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <div
          css={{
            margin: '1rem',
            [mq[2]]: {
              margin: '2rem 5rem',
            },  [mq[3]]: {
              margin: '2rem 15rem',
            },
          }}
        >
          <Switch>
            <Route exact path='/' render={(props) => <HomeR {...props} />} />
            <Route
              exact
              path='/song/:id'
              render={(props) => <SongR {...props} />}
            />
            <Route
              exact
              path='/album/:id'
              render={(props) => <AlbumR {...props} />}
            />
            <Route
              exact
              path='/artist/:id'
              render={(props) => <ArtistR {...props} />}
            />
            <Route
              exact
              path='/search'
              render={(props) => <SearchR {...props} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
