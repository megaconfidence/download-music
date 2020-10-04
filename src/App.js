/**  @jsx jsx  */
import Cat from './pages/Cat';
import Home from './pages/Home';
import mq from './components/mq';
import Genre from './pages/Genre';
import Album from './pages/Album';
import Nav from './components/Nav';
import Artist from './pages/Artist';
import Search from './pages/Search';
import { jsx } from '@emotion/core';
import CatPage from './pages/CatPage';
import TopBar from './components/TopBar';
import GenrePage from './pages/GenrePage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState(window.innerHeight);
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
            height: 'calc(100vh - 67px)',
            transform: 'translateX(-50%)',
            [mq[2]]: {
              maxWidth: '80vw',
              left: 'calc(50% - 170px)',
              borderRight: '1px solid #38444d',
              transform: 'translateX(calc(-50% + 85px))',
            },
            [mq[3]]: {
              maxWidth: '70vw',
            },
          }}
        >
          <Nav height={height} />
          <div
            css={{
              padding: '10px',
              overflowY: 'auto',
              position: 'absolute',
              width: 'calc(100% - 20px)',
              height: 'calc(100vh - 67px)',
              [mq[2]]: {
                left: '150px',
                width: 'calc(100% - 170px)',
                padding: '20px 0 0 20px',
              },
            }}
            onScroll={() => {
              setHeight(window.innerHeight);
            }}
          >
            <div
              css={{
                marginBottom: '5rem',
                position: 'relative',
                [mq[2]]: {
                  marginRight: '20px',
                  marginBottom: '2rem',
                },
              }}
            >
              <Switch>
                <Route exact path='/' render={(props) => <Home {...props} />} />
                <Route
                  exact
                  path='/song/:id'
                  render={(props) => <Album {...props} />}
                />
                <Route
                  exact
                  path='/album/:id'
                  render={(props) => <Album {...props} />}
                />
                <Route
                  exact
                  path='/artist/:id'
                  render={(props) => <Artist {...props} />}
                />
                <Route
                  exact
                  path='/search'
                  render={(props) => <Search {...props} />}
                />
                <Route
                  exact
                  path='/cat/:cattype'
                  render={(props) => <Cat {...props} />}
                />
                <Route
                  exact
                  path='/cat/:cattype/:alpha'
                  render={(props) => <CatPage {...props} />}
                />
                <Route
                  exact
                  path='/genre'
                  render={(props) => <Genre {...props} />}
                />
                <Route
                  exact
                  path='/genre/:id'
                  render={(props) => <GenrePage {...props} />}
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
