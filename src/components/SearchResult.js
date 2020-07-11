/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const SearchResult = ({ searchAlbum=[], searchArtist=[], searchSong=[] }) => {
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
                },
              },
            },
          }}
        >
          {searchAlbum.map((a, k) => (
            <Link key={k + a.name} to={`/album/${a.id}`}>
              <li>
                <div>{a.name}</div>
                <div>album</div>
              </li>
            </Link>
          ))}

          {searchArtist.map((a, k) => (
            <Link to='#' key={k + a.name}>
              <li>
                <div>{a.name}</div>
                <div>artist</div>
              </li>
            </Link>
          ))}

          {searchSong.map((s, k) => (
            <Link to='#' key={k + s.name}>
              <li>
                <div>{s.name}</div>
                <div>song</div>
              </li>
            </Link>
          ))}
          {/* <li>
            <div>song result</div>
            <div>song</div>
          </li>
          <li>
            <div>artist result</div>
            <div>artist</div>
          </li>
          <li>
            <div>genre result</div>
            <div>genre</div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default SearchResult;
