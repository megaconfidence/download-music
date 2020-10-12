/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './mq';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const AlbumCard = ({
  id = '',
  name = '',
  year = '',
  image = '',
  artist = '',
  genre = [],
}) => {
  return (
    <Link
      to={`/album/${id}`}
      css={{
        all: 'unset',
        width: '100%',
        display: 'flex',
        cursor: 'pointer',
        fontSize: '0.8rem',
        borderRadius: '14px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#192734',
      }}
    >
      <div
        css={{
          width: '100%',
          paddingTop: '100%',
          backgroundSize: 'cover',
          borderTopLeftRadius: '14px',
          borderTopRightRadius: '14px',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${image
            .replace(
              'http://cdn-41.myzcloud.pro',
              'https://cdn-41-a.myzcloud.me'
            )
            .replace('http://cdn-39.myzcloud.pro', 'https://cdn-39.myzcloud.me')
            .replace(
              'http://cdn-37.myzcloud.pro',
              'https://cdn-37.myzcloud.me'
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
          {year ? (
            <Fragment>
              Release Year: <time>{year}</time>
            </Fragment>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
