/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './mq';
import { Link } from 'react-router-dom';

const ArtistCard = ({ id = '', name = '', image = '' }) => {
  return (
    <Link
      to={`/artist/${id}`}
      css={{
        all: 'unset',
        width: '100%',
        display: 'flex',
        cursor: 'pointer',
        fontSize: '0.8rem',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        css={{
          width: '100%',
          overflow: 'hidden',
          paddingTop: '100%',
          borderRadius: '100%',
          backgroundSize: 'cover',
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
          textAlign: 'center',
        }}
      >
        <div
          css={{
            fontSize: '1rem',
            textTransform: 'capitalize',
          }}
        >
          {name}
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
