/**  @jsx jsx  */
import { jsx } from '@emotion/core';
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
          backgroundImage: `url(${image})`,
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
