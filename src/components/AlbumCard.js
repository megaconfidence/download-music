/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './MediaQuery';
import { Link } from 'react-router-dom';

const AlbumCard = ({ id, name, year, cover, artist, genre }) => {
  return (
    <Link
      to={`/album/${id}`}
      css={{
        all: 'unset',
        width: '15rem',
        '@media  ( max-width :  549px )': {
          width: 'calc((100vw / 2) - 1rem)',
        },
        cursor: 'pointer',
        fontSize: '0.8rem',
        borderRadius: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#192734',
        [mq[1]]: {
          width: '15rem',
        },
      }}
    >
      <div
        css={{
          width: '100%',
          height: '10rem',
          backgroundSize: 'cover',
          [mq[1]]: {
            width: '100%',
            height: '15rem',
          },
          borderTopLeftRadius: '14px',
          borderTopRightRadius: '14px',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${cover.replace(
            'http://cdn-41.myzcloud.pro',
            'https://cdn-41-a.myzcloud.me'
          )})`,
        }}
      ></div>
      <div
        css={{
          padding: '1rem',
        }}
      >
        <div
          css={{
            marginBottom: '5px',
            textTransform: 'capitalize',
          }}
        >
          {artist.map((a) => a.name).join(' / ')}
        </div>
        <div
          css={{
            fontSize: '1rem',
            textTransform: 'capitalize',
          }}
        >
          {name}
        </div>
        <div
          css={{
            color: '#80919e',
            fontSize: '0.6rem',
            margin: '0.5rem 0 0.3rem',
            textTransform: 'capitalize',

            [mq[1]]: {
              margin: '0.5rem 0',
              fontSize: 'inherit',
            },
          }}
        >
          {genre.map((a) => a.name).join(' / ')}
        </div>
        <div
          css={{
            color: '#80919e',
            fontSize: '0.6rem',
            [mq[1]]: {
              fontSize: 'inherit',
            },
          }}
        >
          Release Year: <time>{year}</time>
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
