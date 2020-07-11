/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SearchBar from './SearchBar';
import { withRouter } from 'react-router';

const ClearFix = () => (
  <div
    css={{
      visibility: 'hidden',
      color: 'transparent',
    }}
  >
    {/* This is a clearfix div*/}
  </div>
);

const TopBar = ({ location: { pathname }, history }) => {
  return (
    <div
      css={{
        display: 'flex',
        padding: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #38444d',
      }}
    >
      {pathname !== '/' ? (
        <div
          css={{
            padding: '10px',
            borderRadius: '9999px',
            '&:hover': {
              backgroundColor: 'rgba(29, 161, 242, 0.1)',
            },
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          <svg viewBox='0 0 24 24' fill='rgb(29, 161, 242)'>
            <g>
              <path d='M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z'></path>
            </g>
          </svg>
        </div>
      ) : (
        <ClearFix />
      )}
      <SearchBar history={history} />
      <ClearFix />
    </div>
  );
};

export default withRouter(TopBar);
