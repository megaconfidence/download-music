/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const AlbumCard = () => {
  return (
    <div
      css={{
        width: '15rem',
        cursor: 'pointer',
        fontSize: '0.8rem',
        borderRadius: '14px',
        display: 'inline-block',
        backgroundColor: '#192734',
      }}
    >
      <div
        css={{
          width: '100%',
          height: '15rem',
          borderTopLeftRadius: '14px',
          borderTopRightRadius: '14px',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://cdn-39.myzcloud.me/img/69/673337/13015037.jpg)',
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
          }}
        >
          Muse
        </div>
        <div
          css={{
            fontSize: '1rem',
          }}
        >
          Origin of Symmetry
        </div>
        <div
          css={{
            color: '#80919e',
            margin: '0.5rem 0',
          }}
        >
          Alternative Rock / Hard Rock / Space Rock
        </div>
        <div css={{ color: '#80919e' }}>Release Year: 2001 </div>
      </div>
    </div>
  );
};

export default AlbumCard;
