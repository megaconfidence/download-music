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
import Nav from './components/Nav';
import CatR from './routes/CatR';
import CatPage from './pages/CatPage';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <div
          css={{
            left: '50%',
            width: '100vw',
            overflowY: 'hidden',
            position: 'relative',
            height: 'calc(100vh - 87px)',
            transform: 'translateX(-50%)',
            [mq[2]]: {
              maxWidth: '80vw',
            },
            [mq[3]]: {
              maxWidth: '70vw',
            },
          }}
        >
          <Nav />
          <div
            css={{
              padding: '10px',
              overflowY: 'auto',
              position: 'absolute',
              width: 'calc(100% - 20px)',
              height: 'calc(100vh - 87px)',
              [mq[2]]: {
                left: '150px',
                width: 'calc(100% - 170px)',
                padding: '20px 0 0 20px',
              },
            }}
          >
            <div
              css={{
                marginBottom: '4rem',
                position: 'relative',
                [mq[2]]: {
                  marginBottom: '2rem',
                },
              }}
            >
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) => <HomeR {...props} />}
                />
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
                <Route
                  exact
                  path='/cat/:cattype'
                  render={(props) => <CatR {...props} />}
                />
                <Route
                  exact
                  path='/cat/:cattype/:alpha'
                  render={(props) => <CatPage {...props} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
