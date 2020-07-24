/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const SearchResult = ({
  searchAlbum = [false],
  searchArtist = [false],
  searchSong = [false],
}) => {
  return (
    <div
      css={{
        width: '100%',
        bottom: '-5px',
        position: 'absolute',
      }}
    >
      <div
        css={{
          top: '0',
          width: '100%',
          position: 'absolute',
          borderRadius: '14px',
          backgroundColor: '#15202b',
        }}
      >
        <ul
          css={{
            all: 'unset',
            display: 'block',
            borderRadius: '14px',
            border: '1px solid #38444d',
            a: {
              all: 'unset',
              padding: '1rem',
              fontSize: '1rem',
              display: 'block',
              cursor: 'pointer',
              borderBottom: '1px solid #38444d',
              '&:visited': {
                color: '#fff',
              },

              '&:last-of-type': {
                borderBottom: 'none',
                borderBottomLeftRadius: '14px',
                borderBottomRightRadius: '14px',
              },
              '&:first-of-type': {
                borderTopLeftRadius: '14px',
                borderTopRightRadius: '14px',
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },

              'div:last-child': {
                marginLeft: '1rem',
                fontSize: '0.7rem',
                borderRadius: '10px',
                padding: '0.2rem 0.3rem',
                backgroundColor: '#1da1f23b',
              },
              li: {
                all: 'unset',
                display: 'flex',
                alignItems: 'center',
                'div:first-of-type': {
                  textTransform: 'capitalize',
                  span: {
                    color: '#888f9a',
                    fontSize: '0.85rem',
                    span: {
                      textTransform: 'lowercase',
                    },
                  },
                },
              },
            },
          }}
        >
          {searchArtist.map((a, k) =>
            a ? (
              <Link key={k + a.name} to={`/artist/${a.id}`}>
                <li>
                  <div>{a.name}</div>
                  <div>artist</div>
                </li>
              </Link>
            ) : null
          )}
          {searchAlbum.map((a, k) =>
            a ? (
              <Link key={k + a.name} to={`/album/${a.id}`}>
                <li>
                  <div>
                    {a.name}
                    <span>
                      &nbsp;(<span>by</span>&nbsp;
                      {a.artist.map((a) => a.name).join(', ')})
                    </span>
                  </div>
                  <div>album</div>
                </li>
              </Link>
            ) : null
          )}
          {searchSong.map((s, k) =>
            s ? (
              <Link key={k + s.name} to={`/song/${s.id}`}>
                <li>
                  <div>
                    {s.name}
                    <span>
                      &nbsp;(<span>by</span>&nbsp;
                      {s.artist.map((a) => a.name).join(', ')})
                    </span>
                  </div>
                  <div>song</div>
                </li>
              </Link>
            ) : null
          )}
          {!searchAlbum.length && !searchArtist.length && !searchSong.length ? (
            <Link key={0} to='#'>
              <li>
                <div>no result found</div>
                <div css={{ display: 'none' }}>
                  {/* This is a clearfix div*/}
                </div>
              </li>
            </Link>
          ) : null}
        </ul>
      </div>
    </div>
  );
};
export default SearchResult;
